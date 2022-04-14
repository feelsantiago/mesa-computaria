import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import PasswordInput from '../password.components';

describe('[PasswordComponents]', () => {
    let password;

    describe('[_checkQuery]', () => {
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

    describe('[addClickEvent]', () => {
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
        it('Should get input value and change its state', () => {
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
            password.setValue('Password!123');

            expect(password.value).toBe('Password!123');
        });

        it('Should set input value and change its state', () => {
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
            password.setValue('Password!123');

            const inputValue = $('#input-password').val();

            expect(inputValue).toBe('Password!123');
        });

        it('Should disable input and keep its state', () => {
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
            password.disable();

            const inputDisabled = $('#input-password').prop('disabled');

            expect(inputDisabled).toBeTruthy();
            expect(password.disabled).toBeTruthy();
        });

        it('Should enable input and keep its state', () => {
            const div = `
            <div id="pass">
                <div>
                    <input id="input-password" type="password" disabled>
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            </div>
             `;

            $(document.body).html(div);

            password = new PasswordInput('#pass');
            password.enable();

            const inputDisabled = $('#input-password').prop('disabled');

            expect(inputDisabled).toBeFalsy();
            expect(password.disabled).toBeFalsy();
        });

        it('Should set required property and change its state', () => {
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

            const inputRequired = $('#input-password').prop('required');

            expect(inputRequired).toBeFalsy();
            expect(password.required).toBeFalsy();
        });
    });

    describe('[validate]', () => {
        it('Should check if input value is valid and keep its state', () => {
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
            password.setValue('T4st&value!');

            expect(password.validate()).toBeTruthy();
            expect(password.valid).toBeTruthy();
        });
    });
});
