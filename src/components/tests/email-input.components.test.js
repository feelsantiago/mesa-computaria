import { describe, expect, it } from 'vitest';
import $ from 'jquery';
import EmailTextInput from '../text-input-email.components';
import InvalidEmail from '../../shared/erros/text-input-email.erros';

describe('[Email input tests]', () => {
    let input;

    it('Should get input value for type email', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email">
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');
        input.setInput('Abcdieop@gmail');

        expect(input._textInput.val()).toEqual('Abcdieop@gmail');
    });

    it('Should set required property in email input', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" required>
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');
        input.setRequired(false);

        const inputTextProperty = $('#Email').prop('required');

        expect(inputTextProperty).toBeFalsy();
    });

    it('Should check if input-email has required property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" required>
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');

        expect(input.isRequired()).toBeTruthy();
    });

    it('Should check if input email has disabled property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" disabled>
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');
        input.disable();
        expect(input.disabled).toBeTruthy();
        input.enable();
        expect(input.disabled).toBeFalsy();
    });

    it('Should check if input email no has disabled property', () => {
        const div = `
            <div class="container-text-input-box">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');
        expect(input.disabled).toBeFalsy();
    });

    it('Should check if input email no has disabled property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');
        input.enable();
        expect(input.disabled).toBeFalsy();
    });

    it('Should check if input email is valid', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');

        expect(input.isTextValid('rodrigo@gmail.com')).toBeTruthy();
    });

    it('Should check if input email is not valid', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');

        input.setInput('abcgde');

        expect(input._textValid).toBeFalsy();
    });

    it('Should check if input email is not valid', () => {
        const div = `
            <div class="container-text-input-box">         
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');

        expect(() => {
            input.isTextValid('rodrigo@gmail');
        }).toThrow('rodrigo@gmail not a valid e-mail address');
    });

    it('Should check if input email is not valid', () => {
        const div = `
            <div class="container-text-input-box">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new EmailTextInput('.container-text-input-box');

        expect(() => {
            input.isTextValid('rodrigo.com');
        }).toThrow('rodrigo.com not a valid e-mail address');
    });
});
