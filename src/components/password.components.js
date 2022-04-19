import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString, required = true) {
        this._div = $(queryString);
        this._input = $(`${queryString} input[type="password"]`);
        this._icon = $(`${queryString} input[type="password"]+i`);

        this.value = '';
        this.required = required;
        this.valid = false;
        this.disabled = false;

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
        this._icon.on('click', () => {
            if (this._input.attr('type') === 'password') {
                this.showValue();
            } else {
                this.hideValue();
            }
        });
    }

    _removeClickEvent() {
        this._icon.off('click');
    }

    validate() {
        // Validate regex: 1 capital letter, 1 number, 1 special character, and size 8;
        const validations = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}])[\d!"#$%&()*,.:<>?@A-Z^a-z{|}]{8,}$/;
        this.valid = false;

        if (validations.test(this.value)) {
            this.valid = true;
        }

        return this.valid;
    }

    enable() {
        this._input.prop('disabled', false);
        this.disabled = this._input.is(':disabled');
        this._addClickEvent();
    }

    disable() {
        this._input.prop('disabled', true);
        this.disabled = this._input.is(':disabled');
        this._removeClickEvent();
    }

    setValue(string) {
        this._input.val(string);
        this.value = this._input.val();
        this.valid = this.validate();
    }

    setRequired(boolean) {
        this._input.prop('required', boolean);
        this.required = boolean;
    }
}
