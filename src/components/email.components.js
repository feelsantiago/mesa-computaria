import $ from 'jquery';
import TextComponent from './text.components';
import InvalidEmail from '../shared/erros/text-input-email.erros';

export default class EmailComponent extends TextComponent {
    constructor(stringQuery, required = true, valid = false, disabled = false, value = '') {
        super(stringQuery, required, valid, disabled, value);

        this._component = $(`${stringQuery} input[type="email"]`);
    }

    validate() {
        // Regex with a email form
        const EmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        this.valid = EmailRegex.test(this._component.val());
        return this.valid;
    }

    validateWithException() {
        this.validate();
        if (this.valid === false) {
            throw new InvalidEmail(this._component.val());
        }
    }
}
