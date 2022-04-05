import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString) {
        this.div = $(queryString);
        this.input = $(`${queryString} input`);
        this.icon = $(`${queryString} input+i`);

        this.valid = false;
        this.enabled = this.input.attr('disabled', false);
        this.required = this.input.attr('required', true);

        this.hasQuery(this.div, this.input, this.icon);
        this.initFor();
    }

    getValue() {
        return this.input.val();
    }

    setValue(string) {
        this.input.val(string);
    }

    hasQuery(div, input, icon) {
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

    initFor() {
        this.icon.on('click', () => {
            if (this.input.attr('type') === 'password') {
                this.input.attr('type', 'text').trigger('focus');
                this.icon.removeClass('fa-eye-slash').addClass('fa-eye');
            } else {
                this.input.attr('type', 'password').trigger('focus');
                this.icon.removeClass('fa-eye').addClass('fa-eye-slash');
            }
        });
    }

    getValid() {
        return this.valid;
    }

    setValid(boolean) {
        this.valid = boolean;
    }

    isValid() {
        // Validate regex: at least 1 capital letter, 1 number, 1 special character, and size 8;
        const validations = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
        const value = this.input.val();

        if (validations.test(value)) {
            this.setValid(true);
            return this.valid;
        }

        return this.valid;
    }

    getEnabled() {
        return this.enabled;
    }

    setEnabled(boolean) {
        this.input.prop('disable', boolean);
        this.enabled = boolean;
    }

    isEnabled() {
        if (this.enabled) {
            return true;
        }

        return false;
    }

    getRequired() {
        return this.required;
    }

    setRequired(boolean) {
        this.input.prop('disable', boolean);
        this.required = boolean;
    }

    isRequired() {
        if (this.required) {
            return true;
        }

        return false;
    }
}
