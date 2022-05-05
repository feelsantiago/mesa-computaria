import { describe, expect, it } from 'vitest';
import $ from 'jquery';
// eslint-disable-next-line import/extensions
import TextComponent from '../text.components';
// eslint-disable-next-line import/extensions

describe('[TextInput]', () => {
    let input;

    describe('[Getters and Setters]', () => {
        it('Should get input text value', () => {
            const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </fieldset>`;

            $(document.body).html(fieldset);

            input = new TextComponent('.text-input-container');
            input.setValue('Abcdieop');

            expect(input._container.val()).toEqual('Abcdieop');
        });
    });

    it('Should set required property in text input', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new TextComponent('.text-input-container');
        input.setRequired(false);

        const inputTextProperty = $('#Text-input-box').prop('required');

        expect(inputTextProperty).toBeFalsy();
    });

    it('Should check if input text has required property', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text" required />
                <input class="input-box" id="Email" name="email">
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new TextComponent('.text-input-container');
        const inputTextProperty = $('#Text-input-box').prop('required');
        expect(inputTextProperty).toBeTruthy();
    });

    it('Should check if input text has disabled property', () => {
        const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </fieldset>`;

        $(document.body).html(fieldset);

        input = new TextComponent('.container');
        input.disable();
        expect(input.disabled).toBeTruthy();
        input.enable();
        expect(input.disabled).toBeFalsy();
    });

    describe('[validState]', () => {
        it('Should get input text value is not valid', () => {
            const fieldset = `
                <fieldset class="text-input-container container">           
                    <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                    <input class="input-box" id="Email" name="email">
                </fieldset>`;

            $(document.body).html(fieldset);

            input = new TextComponent('.text-input-container');
            input.setValue('');

            expect(input.validate()).toBeFalsy();
        });

        it('Should get input text value is valid', () => {
            const fieldset = `
                <fieldset class="text-input-container container">           
                    <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                    <input class="input-box" id="Email" name="email">
                </fieldset>`;

            $(document.body).html(fieldset);

            input = new TextComponent('.text-input-container');
            input.setValue('Abcdieop');

            expect(input.validate()).toBeTruthy();
        });

        it('Should get input text value is valid', () => {
            const fieldset = `
            <fieldset class="text-input-container container">           
                <input class="input-box" id="Text-input-box" type="text" placeholder="First name"  name="text"/>
                <input class="input-box" id="Email" name="email">
            </fieldset>`;

            $(document.body).html(fieldset);

            input = new TextComponent('.text-input-container');
            input.setValue('Ab@di.op');

            expect(input.validate()).toBeTruthy();
        });
    });
});
