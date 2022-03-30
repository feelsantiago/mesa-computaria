import { beforeEach, describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import PasswordInput from '../password-input.components';

describe('[PasswordInputComponents]', () => {
    let PasswordInputComponents;
    describe('[checkQuery]', () => {
        it('Should throw error if query fail or the div element is not finded.', () => {
            const div = `<div id="pass"></div>`;
            $(document.body).html(div);

            expect(() => {
                PasswordInputComponents = new PasswordInput('#pazz');
            }).toThrow('Failed to query div');
        });

        it('Should throw error if query fail or the input element is not finded.', () => {
            const div = `
                <div id="pass">
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                PasswordInputComponents = new PasswordInput('#pass');
            }).toThrow('Failed to query input');
        });

        it('Should throw error if query fail or the icon element is not finded.', () => {
            const div = `
                <div id="pass">
                    <input id="input-password" type="password" class="form-control password-input-enter" placeholder="Senha" required="required">
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                PasswordInputComponents = new PasswordInput('#pass');
            }).toThrow('Failed to query icon');
        });

        it('Should check if the input is password type', () => {
            const div = `
                <div id="pass">
                    <input id="input-password" type="text" class="form-control" placeholder="Senha" required="required">
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                PasswordInputComponents = new PasswordInput('#pass');
            }).toThrow('Input query is not password type');
        });
    });

    describe('[initFor]', () => {
        it('Should add a listener to click event', () => {
            const div = `
                <div id="pass">
                    <input id="input-password" type="password" class="form-control password-input-enter" placeholder="Senha" required="required">
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            `;

            $(document.body).html(div);

            vi.spyOn($.fn, 'on');
            PasswordInputComponents = new PasswordInput('#pass');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(1);
        });

        it('Should change password input to text input', () => {
            const div = `
                    <div id="pass">
                        <input id="input-password" type="password" class="form-control password-input-enter" placeholder="Senha" required="required">
                        <i id="icon" class="fa-solid fa-eye-slash"></i>
                    </div>
                 `;

            $(document.body).html(div);

            PasswordInputComponents = new PasswordInput('#pass');
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
                    <input id="input-password" type="password" class="form-control password-input" placeholder="Senha" required="required">
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            `;

            $(document.body).html(div);

            PasswordInputComponents = new PasswordInput('#pass');
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
});
