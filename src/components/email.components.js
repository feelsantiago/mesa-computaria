import $ from 'jquery';
import TextComponent from './text.components';
import InvalidEmail from '../shared/erros/text-input-email.erros';

export default class EmailComponent extends TextComponent {
    constructor(stringQuery, required = true, valid = false, disabled = false, value = '') {
        super(stringQuery, required, valid, disabled, value);

        this._container = $(`${stringQuery} input[type="email"]`);
    }

    setValue(string) {
        this._container.val(string);
        this.value = this._container.val();
    }

    validate() {
        // Regex with a email form
        const EmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!EmailRegex.test(this._container.val())) {
            this.valid = false;
            throw new InvalidEmail(this._container.val());
        } else {
            this.valid = true;
            return this.valid;
        }
    }
}
