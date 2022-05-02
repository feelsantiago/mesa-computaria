import $ from 'jquery';
import TextInput from './text.components';
import InvalidEmail from '../shared/erros/text-input-email.erros';

export default class EmailTextInput extends TextInput {
    constructor(stringQuery, _container, required = true, _textValid = false, disabled = false) {
        super(stringQuery, _container, required, _textValid, disabled);

        this._container = $(`${stringQuery} input[type="email"]`);
    }

    validate() {
        // Regex with a email form
        const EmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!EmailRegex.test(this._container.val())) {
            this._textValid = false;
            throw new InvalidEmail(this._container.val());
        } else {
            this._textValid = true;
            return this._textValid;
        }
    }
}
