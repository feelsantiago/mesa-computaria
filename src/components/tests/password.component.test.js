import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import PasswordInput from '../password.component';

describe('[PasswordComponent]', () => {
    describe('[_checkQuery]', () => {
        it('Should throw error if query fail or the div element is not finded.', () => {
            const div = `<div id="pass"></div>`;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            let password;

            expect(() => {
                password = new PasswordInput('#pazz');
            }).toThrow('Failed to query div');
        });

        it('Should throw error if query fail or the input element is not finded.', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <i></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            let password;

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query input password');
        });

        it('Should throw error if query fail or the icon element is not finded.', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <input type="password">
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            let password;

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query icon');
        });
    });

    describe('[_addClickEvent]', () => {
        it('Should add a listener to click event', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <input type="password">
                        <i></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            vi.spyOn($.fn, 'on');
            // eslint-disable-next-line no-unused-vars
            const password = new PasswordInput('#pass');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(1);
        });

        it('Should change password input to text input', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            const password = new PasswordInput('#pass');
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
                    <fieldset>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            const password = new PasswordInput('#pass');
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

    describe('[get/set]', () => {
        it('Should get input value and change its state', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const password = new PasswordInput('#pass');
            password.setValue('Password!123');

            expect(password.value).toBe('Password!123');
        });

        it('Should set input value and change its state', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const password = new PasswordInput('#pass');
            password.setValue('Password123');

            const inputValue = $('#input-password').val();

            expect(inputValue).toBe('Password123');
            expect(password.value).toBe('Password123');
            expect(password.valid).toBeFalsy();
        });
    });

    describe('[enable/disable]', () => {
        it('Should disable fieldset group and keep its state', () => {
            const div = `
                <div id="pass">
                    <fieldset class="component">
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const password = new PasswordInput('#pass');
            password.disable();

            const inputDisabled = $('.component').prop('disabled');

            expect(inputDisabled).toBeTruthy();
            expect(password.disabled).toBeTruthy();
        });

        it('Should enable fieldset group and keep its state', () => {
            const div = `
            <div id="pass">
                <fieldset class="component">
                    <input id="input-password" type="password" disabled>
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </fieldset>
            </div>
             `;

            $(document.body).html(div);

            const password = new PasswordInput('#pass');
            password.enable();

            const inputDisabled = $('.component').prop('disabled');

            expect(inputDisabled).toBeFalsy();
            expect(password.disabled).toBeFalsy();
        });
    });

    describe('[validate]', () => {
        it('Should check if input value is valid and keep its state', () => {
            const div = `
                <div id="pass">
                    <fieldset>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const password = new PasswordInput('#pass');
            password.setValue('T4st&value!');

            expect(password.validate()).toBeTruthy();
            expect(password.valid).toBeTruthy();
        });
    });
});
