import $ from 'jquery';
import Component from './component';

export default class TextComponent extends Component {
    constructor(stringQuery, required = true, disabled = false, valid = false) {
        super(disabled, required);
        this.stringQuery = stringQuery;

        this._container = $(`${stringQuery} input[type="text"]`);
        this.valid = valid;
        this.value = '';
    }

    setRequired(boolean) {
        this._container.prop('required', boolean);
        this.required = boolean;
    }

    setValue(string) {
        this.value = this._container.val(string);
        this.valid = this.validate();
    }

    validate() {
        this.valid = !(this._container.val() === '');
        return this.valid;
    }
}
