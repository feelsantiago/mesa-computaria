import { describe, expect, it, vi } from "vitest";
import $ from 'jquery';
import { PasswordInputService } from '../password-input.service';

describe('[PasswordInputService]', () => {

    describe('[initFor]', () => {

        it('Should add a listener to click event', () => {

            const divTest = '<div id="div-id-test">';
            document.body.innerHTML = divTest;

            vi.spyOn($.fn, 'on');
            PasswordInputService.initFor('#div-id-test');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(1);
        });

        it('Should change password input to text input', () => {
            
            const iconTest = '<i id="icon-id-test"></i>';
            const inputTest = `<input id="input-id-test" type="password"></input> <br> ${iconTest}`;
            const divTest = `<div id="div-id-test">${inputTest}</div>`;
            
            document.body.innerHTML = divTest;

            PasswordInputService.initFor('#div-id-test');
            $('#div-id-test').trigger('click');

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