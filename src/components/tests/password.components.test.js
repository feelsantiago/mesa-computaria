import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import PasswordInput from '../password.components';

describe('[PasswordComponents]', () => {
    let password;

    describe('[hasQuery]', () => {
        it('Should throw error if query fail or the div element is not finded.', () => {
            const div = `<div id="pass"></div>`;
            $(document.body).html(div);

            expect(() => {
                password = new PasswordInput('#pazz');
            }).toThrow('Failed to query div');
        });

        it('Should throw error if query fail or the input element is not finded.', () => {
            const div = `
                <div id="pass">
                    <i></i>
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query input password');
        });

        it('Should throw error if query fail or the icon element is not finded.', () => {
            const div = `
                <div id="pass">
                    <input type="password">
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query icon');
        });
    });

    describe('[initFor]', () => {
        it('Should add a listener to click event', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input type="password">
                        <i></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            vi.spyOn($.fn, 'on');
            password = new PasswordInput('#pass');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(1);
        });

        it('Should change password input to text input', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            $('#icon').trigger('click');

            const resultType = $('#input-password').attr('type');
            const resultIcon = $('#icon').attr('class');
            const resultInput = $('#input-password');

            expect(resultType).toBe('text');
            expect(resultIcon).toBe('fa-solid fa-eye');
            expect(resultInput.is(':focus')).toBeTruthy();
        });

        it('Should change text input to password input', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            $('#icon').trigger('click');
            $('#icon').trigger('click');

            const resultType = $('#input-password').attr('type');
            const resultIcon = $('#icon').attr('class');
            const resultInput = $('#input-password');

            expect(resultType).toBe('password');
            expect(resultIcon).toBe('fa-solid fa-eye-slash');
            expect(resultInput.is(':focus')).toBeTruthy();
        });
    });

    describe('[Getters and Setters]', () => {
        it('Should get input value', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            // Lefting a spyOn
            password = new PasswordInput('#pass');
            password.getValue();

            const inputValue = $('#input-password').val();

            expect(password.getValue()).toBe(inputValue);
        });

        it('Should set input value', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.setValue('test');

            const inputValue = $('#input-password').val();

            expect(inputValue).toBe('test');
        });

        it('Should get disabled property', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.getDisabled();

            const inputProperty = $('#input-password').prop('disable');

            expect(inputProperty).toBeFalsy();
        });

        it('Should set disabled property', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.setDisabled(true);

            const inputProperty = $('#input-password').prop('disable');

            expect(inputProperty).toBeTruthy();
        });

        it('Should get required property', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password" required>
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.getRequired();

            const inputProperty = $('#input-password').prop('required');

            expect(inputProperty).toBeTruthy();
        });

        it('Should get required property', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password" required>
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.setRequired(false);

            const inputProperty = $('#input-password').prop('required');

            expect(inputProperty).toBeFalsy();
        });
    });

    describe('[isProperty]', () => {
        it('Should check if input value is valid', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.setValue('T4st&validations');

            const isValid = password.isValid();

            expect(isValid).toBeTruthy();
        });

        it('Should check if input has disabled property', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.isDisabled();

            const inputProperty = $('#input-password').prop('disable');

            expect(inputProperty).toBeFalsy();
        });

        it('Should check if input has required property', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password" required>
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                </div>
            `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.isRequired();

            const inputProperty = $('#input-password').prop('required');

            expect(inputProperty).toBeTruthy();
        });
    });
});
