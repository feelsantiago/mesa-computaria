import { describe, expect, it, vi } from "vitest";
import $ from 'jquery';
import { PasswordInputService } from '../password-input.service';

describe('[PasswordInputService]', () => {

    describe('[initFor]', () => {

        it('Should add a listener to click event', () => {

            const input = '<input id="test-input">';
            document.body.innerHTML = input;

            vi.spyOn($.fn, 'on');
            PasswordInputService.initFor('#test-input');

            expect($.fn.on).toHaveBeenCalledWith('click', expect.anything());
            expect($.fn.on).toHaveBeenCalledTimes(1);
        });

        it('Should change password input to text input', () => {});

    });
});