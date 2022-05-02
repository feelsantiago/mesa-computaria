import { describe, expect, it } from 'vitest';
import $ from 'jquery';
// eslint-disable-next-line import/extensions
import TextInput from '../text.components.js';
// eslint-disable-next-line import/extensions

describe('[TextInput]', () => {
    let input;

    describe('[Getters and Setters]', () => {
        it('Should get input text value', () => {
            const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

            $(document.body).html(div);

            input = new TextInput('.container-text-input-box');
            input.setInput('Abcdieop');

            expect(input._container.val()).toEqual('Abcdieop');
        });
    });

    it('Should set required property in text input', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text" required/>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new TextInput('.container-text-input-box');
        input.setRequired(false);

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

        input = new TextInput('.container-text-input-box');
        const inputTextProperty = $('#Text-input-box').prop('required');
        expect(inputTextProperty).toBeTruthy();
    });

    it('Should check if input text has disabled property', () => {
        const div = `
            <div class="container-text-input-box">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text" disabled>
                <input class="input-box" id="Email" name="email" type="email" >
            </div>`;

        $(document.body).html(div);

        input = new TextInput('.container-text-input-box');
        input.disable();
        expect(input.disabled).toBeTruthy();
        input.enable();
        expect(input.disabled).toBeFalsy();
    });

    describe('[validState]', () => {
        it('Should get input text value is not valid', () => {
            const div = `
            <div class="container-text-input-box">
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

            $(document.body).html(div);

            input = new TextInput('.container-text-input-box');
            input.setInput('');

            expect(input.validate()).toBeFalsy();
        });

        it('Should get input text value is valid', () => {
            const div = `
            <div class="container-text-input-box">  
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

            $(document.body).html(div);

            input = new TextInput('.container-text-input-box');
            input.setInput('Abcdieop');

            expect(input.validate()).toBeTruthy();
        });

        it('Should get input text value is valid', () => {
            const div = `
            <div class="container-text-input-box">  
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </div>`;

            $(document.body).html(div);

            input = new TextInput('.container-text-input-box');
            input.setInput('Ab@di.op');

            expect(input.validate()).toBeTruthy();
        });
    });
});
