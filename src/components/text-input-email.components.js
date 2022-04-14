import $ from 'jquery';
import TextInput from './text-input.components';
import InvalidEmail from '../shared/erros/text-input-email.erros';

export default class EmailTextInput extends TextInput {
    constructor(stringQuery, required = true, textValid = false, disabled = false) {
        super(stringQuery, required, textValid, disabled);
        this._textInput = $(`${stringQuery} input[type="email"]`);
    }

    isTextValid() {
        // Regex with a email form
        const EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!EmailRegex.test(this._textInput.val())) {
            this.textValid = false;
            throw new InvalidEmail(this._textInput.val());
        } else {
            this._textValid = true;
            return this._textValid;
        }
    }
}
