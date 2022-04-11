/* eslint-disable no-undef */
import $ from 'jquery';
// eslint-disable-next-line import/extensions
import TextInput from '../text-input.components.js';
// eslint-disable-next-line import/extensions
import EmailTextInput from '../text-input-email.component.js';

describe('[TextInput]', () => {
    let textInput;

    describe('[Getters and Setters]', () => {
        it('Should get input text value', () => {
            const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

            $(document.body).html(div);

            textInput = new TextInput('.container-text-input-box');
            textInput.setTextInput('Abcdieop');

            expect(textInput.getTextInput()).toEqual('Abcdieop');
        });
    });

    describe('[Getters and Setters]', () => {
        it('Should get input value for type email', () => {
            const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email">
            </div>`;

            $(document.body).html(div);

            textInput = new EmailTextInput('.container-text-input-box');
            textInput.setEmailInput('Abcdieop@gmail');

            expect(textInput.getEmailInput()).toEqual('Abcdieop@gmail');
        });
    });

    it('Should set required property in email input', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" required>
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');
        textInput.setRequired(false);

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

        textInput = new EmailTextInput('.container-text-input-box');

        expect(textInput.isRequired()).toBeTruthy();
    });

    it('Should set required property in text input', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text" required/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new TextInput('.container-text-input-box');
        textInput.setTextRequired(false);

        const inputTextProperty = $('#Text-input-box').prop('required');

        expect(inputTextProperty).toBeFalsy();
    });

    it('Should check if input text has required property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text" required/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new TextInput('.container-text-input-box');

        expect(textInput.isTextRequired()).toBeTruthy();
    });

    it('Should check if input email has disabled property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" disabled>
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        expect(textInput.isEmailEnable()).toBeFalsy();
    });

    it('Should check if input email no has disabled property', () => {
        const div = `
            <div class="container-text-input-box">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        expect(textInput.isEmailEnable()).toBeTruthy();
    });

    it('Should check if input text has disabled property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text" disabled>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new TextInput('.container-text-input-box');

        expect(textInput.isTextEnable()).toBeFalsy();
    });

    it('Should check if input email no has disabled property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        expect(textInput.isTextEnable()).toBeTruthy();
    });

    it('Should check if input email is valid', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        textInput.setEmailInput('rodrigo@gmail.com');

        expect(textInput.isValidEmail()).toBeTruthy();
    });

    it('Should check if input email is not valid', () => {
        const div = `
            <div class="container-text-input-box">         
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        textInput.setEmailInput('rodrigo@gmail');

        expect(() => {
            throw new Error('not a valid e-mail address');
        }).toThrow('not a valid e-mail address');
    });

    it('Should check if input email is not valid', () => {
        const div = `
            <div class="container-text-input-box">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        textInput.setEmailInput('rodrigo.com');

        expect(() => {
            throw new Error('not a valid e-mail address');
        }).toThrow('not a valid e-mail address');
    });

    it('Should check if input email is not valid', () => {
        const div = `
            <div class="container-text-input-box">          
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        textInput = new EmailTextInput('.container-text-input-box');

        textInput.setEmailInput('rodrigo@g.com');

        expect(() => {
            throw new Error('not a valid e-mail address');
        }).toThrow('not a valid e-mail address');
    });

    it('Should get input text value is valid', () => {
        const div = `
            <div class="container-text-input-box">  
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

        $(document.body).html(div);

        textInput = new TextInput('.container-text-input-box');
        textInput.setTextInput('Abcdieop');

        expect(textInput.isTextValid()).toEqual('Abcdieop');
    });

    it('Should get input text value is not valid', () => {
        const div = `
            <div class="container-text-input-box">
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

        $(document.body).html(div);

        textInput = new TextInput('.container-text-input-box');
        textInput.setTextInput('');

        expect(() => {
            throw new Error('write any thing');
        }).toThrow('write any thing');
    });

    it('Should get and set input text valid', () => {
        const div = `
            <div class="container-text-input-box">
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

        $(document.body).html(div);

        textInput = new TextInput('.container-text-input-box');
        textInput.setTextValid('weerrr');

        expect(textInput.getTextValid()).toEqual('weerrr');
    });
});
