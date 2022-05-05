import { describe, expect, it } from 'vitest';
import $ from 'jquery';
import EmailComponent from '../email.components';

describe('[Email input tests]', () => {
    let input;

    it('Should get input value for type email', () => {
        const fieldset = `
        <fieldset class="text-input-container container">           
            <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
            <input class="input-box" id="Email" name="email" type="email" >
        </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setValue('Abcdieop@gmail.com');

        expect(input.value).toEqual('Abcdieop@gmail.com');
    });

    it('Should set required property in email input', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" required>
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setRequired(false);

        const inputTextProperty = $('#Email').prop('required');

        expect(inputTextProperty).toBeFalsy();
    });

    it('Should check if input-email has required property', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" required>
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.container');
        const inputTextProperty = $('#Email').prop('required');
        expect(inputTextProperty).toBeTruthy();
    });

    it('Should check if input email has disabled property', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" disabled>
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.container');
        input.disable();
        expect(input.disabled).toBeTruthy();
        input.enable();
        expect(input.disabled).toBeFalsy();
    });

    it('Should check if input email no has disabled property', () => {
        const fieldset = `
            <fieldset class="text-input-container container">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        expect(input.disabled).toBeFalsy();
    });

    it('Should check if input email no has disabled property', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.enable();
        expect(input.disabled).toBeFalsy();
    });

    it('Should check if input email is valid', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setValue('rodrigo@gmail.com');
        expect(input.validate()).toBeTruthy();
    });

    it('Should check if textValid email is true', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setValue('rodrigo@gmail.com');
        input.validate();
        expect(input.valid).toBeTruthy();
    });

    it('Should check if input email is not valid', () => {
        const fieldset = `
            <fieldset class="text-input-container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setValue('abcgde');
        expect(() => {
            input.validate();
        }).toThrow('abcgde not a valid e-mail address');
        expect(input.valid).toBeFalsy();
    });

    it('Should check if input email is not valid', () => {
        const fieldset = `
            <fieldset class="text-input-container container">         
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setValue('rodrigo@gmail');
        expect(() => {
            input.validate();
        }).toThrow('rodrigo@gmail not a valid e-mail address');
    });

    it('Should check if input email is not valid', () => {
        const fieldset = `
            <fieldset class="text-input-container container">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new EmailComponent('.text-input-container');
        input.setValue('rodrigo.com');
        expect(() => {
            input.validate();
        }).toThrow('rodrigo.com not a valid e-mail address');
    });
});
