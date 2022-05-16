import $ from 'jquery';
import Component from './component';

export default class TextComponent extends Component {
    constructor(stringQuery, required = true, disabled = false, valid = false) {
        super(disabled, required);
        this._stringQuery = stringQuery;

        this._component = $(`${stringQuery} input[type="text"]`);
        this.valid = valid;
        this.value = '';
    }

    setRequired(boolean) {
        this._component.prop('required', boolean);
        this.required = boolean;
    }

    setValue(string) {
        this._component.val(string);
        this.value = this._component.val();
        this.valid = this.validate();
    }

    validate() {
        this.valid = !(this._component.val() === '');
        return this.valid;
    }
}
