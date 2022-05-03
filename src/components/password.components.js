import $ from 'jquery';
import Component from './component';

export default class PasswordInput extends Component {
    constructor(query, required = true) {
        super(query, required);
        this._div = $(query);
        this._input = $(`${query} input[type="password"]`);
        this._icon = $(`${query} input[type="password"]+i`);

        this.value = this._input.val();
        this.valid = false;

        this._checkQuery(this._div, this._input, this._icon);
        this._addClickEvent();
    }

    _checkQuery(div, input, icon) {
        if (div.length === 0) {
            throw new Error('Failed to query div');
        }

        if (input.length === 0) {
            throw new Error('Failed to query input password');
        }

        if (icon.length === 0) {
            throw new Error('Failed to query icon');
        }
    }

    showValue() {
        this._input.attr('type', 'text').trigger('focus');
        this._icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }

    hideValue() {
        this._input.attr('type', 'password').trigger('focus');
        this._icon.removeClass('fa-eye').addClass('fa-eye-slash');
    }

    _addClickEvent() {
        this._icon.on('click', () => (this._input.attr('type') === 'password' ? this.showValue() : this.hideValue()));
    }

    validate() {
        // Validate regex: 1 capital letter, 1 number, 1 special character, and size 8;
        const validations = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}])[\d!"#$%&()*,.:<>?@A-Z^a-z{|}]{8,}$/;

        this.valid = validations.test(this.value);

        return this.valid;
    }

    setValue(string) {
        this._input.val(string);
        this.value = this._input.val();
        this.valid = this.validate();
    }
}
