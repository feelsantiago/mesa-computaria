import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import PasswordInput from '../password.components';

describe('[password]', () => {
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
                    <input type="button">
                    <span></span>
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
                    <input type="button">
                    <span></span>
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query icon');
        });

        it('Should throw error if query fail or the button element is not finded.', () => {
            const div = `
                <div id="pass">
                    <input type="password">
                    <i></i>
                    <span></span>
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query input button');
        });

        it('Should throw error if query fail or the span element is not finded.', () => {
            const div = `
                <div id="pass">
                    <input type="password">
                    <i></i>
                    <input type="button">
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                password = new PasswordInput('#pass');
            }).toThrow('Failed to query span');
        });
    });

    describe('[initFor]', () => {
        it('Should add a listener to click event', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input type="password">
                        <i></i>
                        <span></span>
                    </div>
                    <div>
                        <input type="button">
                    </div>
                </div>
            `;

            $(document.body).html(div);

            vi.spyOn($.fn, 'on');
            PasswordInputComponents = new PasswordInput('#pass');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(2);
        });

        it('Should change password input to text input', () => {
            const div = `
                <div id="pass">
                    <div>
                        <input id="input-password" type="password">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                        <span></span>
                    </div>
                    <div>
                        <input type="button">
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
                        <span></span>
                    </div>
                    <div>
                        <input type="button">
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

    describe('[isValid]', () => {
        // Add test to validations;
    });
});
