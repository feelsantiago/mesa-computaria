/* eslint-disable unicorn/better-regex */
import $ from 'jquery';
import TextInput from './text-input.components';

export default class EmailTextInput extends TextInput {
    constructor(stringQuery, textEnable = false, required = true) {
        super(stringQuery, textEnable, required);
        this.emailInput = $(`${stringQuery} input[type="email"]`);
    }

    getEmailInput() {
        return this.emailInput.val();
    }

    setEmailInput(value) {
        this.emailInput = this.emailInput.val(value);
    }

    isValidEmail() {
        // Regex with a email form
        // eslint-disable-next-line no-useless-escape
        // eslint-disable-next-line unicorn/better-regex
        // eslint-disable-next-line no-useless-escape
        const EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!EmailRegex.test(this.emailInput.val())) {
            throw new Error('not a valid e-mail address');
        } else {
            return true;
        }
    }

    getRequired() {
        return this.emailInput.prop('required');
    }

    setRequired(boolean) {
        this.emailInput.prop('required', boolean);
        this.required = boolean;
    }

    isRequired() {
        if (!this.emailInput.prop('required')) {
            this.required = false;
            return this.required;
        }

        return this.required;
    }

    isEmailEnable() {
        if (!this.emailInput.prop('disabled')) {
            return true;
        }

        return false;
    }
}
