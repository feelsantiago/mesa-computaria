/* eslint-disable default-param-last */
/* eslint-disable unicorn/better-regex */
import $ from 'jquery';

export default class TextInput {
    constructor(stringQuery, textEnable = false, required = true, textValid = '') {
        this.stringQuery = stringQuery;

        this.textInput = $(`${stringQuery} input[type="text"]`);

        this.textValid = textValid;
        this.textEnable = textEnable;
        this.required = required;
    }

    getTextInput() {
        return this.textInput.val();
    }

    setTextInput(value) {
        this.textInput = this.textInput.val(value);
    }

    getTextValid() {
        return this.textValid.val();
    }

    setTextValid(text) {
        this.textValid = this.textInput.val(text);
    }

    isTextValid() {
        if (this.textInput.val() === '') {
            throw new Error('write any thing');
        }

        return this.textValid.val();
    }

    isTextEnable() {
        if (!this.textInput.prop('disabled')) {
            return true;
        }

        return false;
    }

    getTextRequired() {
        return this.textInput.prop('required');
    }

    setTextRequired(boolean) {
        this.textInput.prop('required', boolean);
        this.required = boolean;
    }

    isTextRequired() {
        if (!this.textInput.prop('required')) {
            this.required = false;
            return this.required;
        }

        return this.required;
    }
}
