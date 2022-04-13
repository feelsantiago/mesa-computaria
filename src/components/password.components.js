import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString, required = true) {
        this.div = $(queryString);
        this.input = $(`${queryString} input[type="password"]`);
        this.icon = $(`${queryString} input[type="password"]+i`);

        this.value = '';
        this.required = required;
        this.valid = false;
        this.disabled = false;

        this.checkQuery(this.div, this.input, this.icon);
        this.addClickEvent();
    }

    checkQuery(div, input, icon) {
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
        this.input.attr('type', 'text').trigger('focus');
        this.icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }

    hideValue() {
        this.input.attr('type', 'password').trigger('focus');
        this.icon.removeClass('fa-eye').addClass('fa-eye-slash');
    }

    addClickEvent() {
        this.icon.on('click', () => {
            if (this.input.attr('type') === 'password') {
                this.showValue();
            } else {
                this.hideValue();
            }
        });
    }

    setValue(string) {
        this.input.val(string);
        this.value = this.input.val();
        this.valid = this.validate();
    }

    validate() {
        // Validate regex: 1 capital letter, 1 number, 1 special character, and size 8;
        const validations = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}])[\d!"#$%&()*,.:<>?@A-Z^a-z{|}]{8,}$/;

        if (validations.test(this.value)) {
            this.valid = true;
            return this.valid;
        }

        this.valid = false;
        return this.valid;
    }

    enable() {
        this.input.prop('disabled', false);
        this.addClickEvent();
        this.disabled = false;
    }

    disable() {
        this.input.prop('disabled', true);
        this.icon.off('click');
        this.disabled = true;
    }

    setRequired(boolean) {
        this.input.prop('required', boolean);
        this.required = boolean;
    }
}
