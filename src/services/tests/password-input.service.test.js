import { describe, expect, it, vi } from "vitest";
import $ from 'jquery';
import { PasswordInputService } from '../password-input.service';

describe('[PasswordInputService]', () => {

    describe('[initFor]', () => {

        it('Should add a listener to click event', () => {

            const input = '<input id="input-id-test">';
            document.body.innerHTML = input;

            vi.spyOn($.fn, 'on');
            PasswordInputService.initFor('#input-id-test');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(1);
        });

        it('Should change password input to text input', () => {
        
            const input = '<input type="password" id="input-id-test">';
            document.body.innerHTML = input;

            PasswordInputService.initFor('#input-id-test');
            $('#input-id-test').trigger('click');

            const result = $('#input-id-test').attr('type');
            
            expect(result).toBe('text');
        });

        it('Should change text input to password input', () => {
        
            const input = '<input type="text" id="input-id-test">';
            document.body.innerHTML = input;

            PasswordInputService.initFor('#input-id-test');
            $('#input-id-test').trigger('click');

            const result = $('#input-id-test').attr('type');

            expect(result).toBe('password');
        });
    });
});