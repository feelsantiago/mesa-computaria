import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import { PasswordInputService } from '../password-input.service';

describe('[PasswordInputService]', () => {
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
            PasswordInputService.initFor('#pass');

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

            PasswordInputService.initFor('#pass');
            $('#icon').trigger('click');

            const resultType = $('#input-password').attr('type');
            const resultIcon = $('#icon').attr('class');
            const resultInput = $('#input-password');

            expect(resultType).toBe('text');
            expect(resultIcon).toBe('fa-solid fa-eye');
            expect(resultInput.is(':focus')).toBe(true);
        });

        it('Should change text input to password input', () => {
            const div = `
                <div id="pass">
                    <input id="input-password" type="password" class="form-control password-input" placeholder="Senha" required="required">
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            `;

            $(document.body).html(div);

            PasswordInputService.initFor('#pass');
            $('#icon').trigger('click');
            $('#icon').trigger('click');

            const resultType = $('#input-password').attr('type');
            const resultIcon = $('#icon').attr('class');
            const resultInput = $('#input-password');

            expect(resultType).toBe('password');
            expect(resultIcon).toBe('fa-solid fa-eye-slash');
            expect(resultInput.is(':focus')).toBe(true);
        });

        it('Should throw error failed on query div', () => {
            expect(() => {
                PasswordInputService.initFor('#paz');
            }).toThrow('Failed to query div');
        });

        it('Should throw error failed on query input', () => {
            const div = `
                <div id="pass">
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                PasswordInputService.initFor('#pass');
            }).toThrow('Failed to query input');
        });

        it('Should throw error failed on query icon', () => {
            const div = `
                <div id="pass">
                    <input id="input-password" type="password" class="form-control password-input-enter" placeholder="Senha" required="required">
                </div>
            `;

            $(document.body).html(div);

            expect(() => {
                PasswordInputService.initFor('#pass');
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
                PasswordInputService.initFor('#pass');
            }).toThrow('Input query is not password type');
        });
    });
});
