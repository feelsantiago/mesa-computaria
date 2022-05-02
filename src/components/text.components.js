import $ from 'jquery';
import Component from './component';

export default class TextInput extends Component {
    constructor(stringQuery, _container, required = true, disabled = false) {
        super(_container, disabled, required);
        this.stringQuery = stringQuery;

        this._container = $(`${stringQuery} input[type="text"]`);
        this._textValid = false;
    }

    setRequired(boolean) {
        this._container.prop('required', boolean);
        this.required = boolean;
    }

    setInput(value) {
        this._container = this._container.val(value);
    }

    validate() {
        if (this._container.val() === '') {
            this._textValid = false;
            return this._textValid;
        }

        this._textValid = true;
        return this._textValid;
    }
}
