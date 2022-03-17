import { describe, expect, it, vi } from "vitest";
import $ from 'jquery';
import { PasswordInputService } from '../password-input.service';

describe('[PasswordInputService]', () => {

    describe('[initFor]', () => {

        it('Should add a listener to click event', () => {

            const div = '<div id="div-id-test">';
            document.body.innerHTML = div;

            vi.spyOn($.fn, 'on');
            PasswordInputService.initFor('#div-id-test');

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
            
            expect(resultType).toBe('text');
            expect(resultIcon).toBe('fa-solid fa-eye');
            // expect do focus
        });

        it('Should change text input to password input', () => {
        
            const div = `
                <div id="pass">
                    <input id="input-password" type="text" class="form-control password-input-enter" placeholder="Senha" required="required">
                    <i id="icon" class="fa-solid fa-eye-slash"></i>
                </div>
            `;

            $(document.body).html(div);

            PasswordInputService.initFor('#pass');
            $('#icon').trigger('click');

            const resultType = $('#input-password').attr('type');
            const resultIcon = $('#icon').attr('class');
            
            
            expect(resultType).toBe('password');
            expect(resultIcon).toBe('fa-solid fa-eye-slash');
            // expect do focus
        });

        it('Should check if input and icon query is empty', () => {
            // Test empty query on initFor
        });
    });
});