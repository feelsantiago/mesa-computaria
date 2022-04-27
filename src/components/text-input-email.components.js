import $ from 'jquery';
import TextInput from './text-input.components';
import InvalidEmail from '../shared/erros/text-input-email.erros';

export default class EmailTextInput extends TextInput {
    constructor(stringQuery, required = true, _textValid = false, disabled = false) {
        super(stringQuery, required, _textValid, disabled);
        this._textInput = $(`${stringQuery} input[type="email"]`);
    }

    validate() {
        // Regex with a email form
        const EmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!EmailRegex.test(this._textInput.val())) {
            this._textValid = false;
            throw new InvalidEmail(this._textInput.val());
        } else {
            this._textValid = true;
            return this._textValid;
        }
    }
}
