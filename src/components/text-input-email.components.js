import $ from 'jquery';
import TextInput from './text-input.components';
import InvalidEmail from '../shared/erros/text-input-email.erros';

export default class EmailTextInput extends TextInput {
    constructor(stringQuery, required = true, _textValid = false, disabled = false) {
        super(stringQuery, required, _textValid, disabled);
        this._textInput = $(`${stringQuery} input[type="email"]`);
    }

    isTextValid(email) {
        // Regex with a email form
        const EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!EmailRegex.test(email)) {
            this._textValid = false;
            throw new InvalidEmail(email);
        } else {
            this._textInput = this._textInput.val(email);
            this._textValid = true;
            return this._textValid;
        }
    }
}
