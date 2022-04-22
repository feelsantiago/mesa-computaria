import $ from 'jquery';
import Input from './input-components';

export default class TextInput extends Input {
    constructor(stringQuery, required = true, disabled = false) {
        super(disabled, required);
        this.stringQuery = stringQuery;

        this._textInput = $(`${stringQuery} input[type="text"]`);

        this._textValid = false;
    }

    setInput(value) {
        this._textInput = this._textInput.val(value);
    }

    validate() {
        if (this._textInput.val() === '') {
            this._textValid = false;
            return this._textValid;
        }

        this._textValid = true;
        return this._textValid;
    }
}
