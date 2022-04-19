import { describe, expect, it } from 'vitest';
import $ from 'jquery';
import EmailTextInput from '../text-input-email.components';

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
        const inputTextProperty = $('#Email').prop('required');
        expect(inputTextProperty).toBeTruthy();
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
        input.setInput('rodrigo@gmail.com');
        expect(input.isValid()).toBeTruthy();
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
        input.setInput('rodrigo@gmail');
        expect(() => {
            input.isValid();
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
        input.setInput('rodrigo.com');
        expect(() => {
            input.isValid();
        }).toThrow('rodrigo.com not a valid e-mail address');
    });
});
