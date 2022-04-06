import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString, valid = false, required = true, disabled = false) {
        this.div = $(queryString);
        this.input = $(`${queryString} input[type="password"]`);
        this.icon = $(`${queryString} input[type="password"]+i`);

        this.valid = valid;
        this.disabled = disabled;
        this.required = required;

        this.hasQuery(this.div, this.input, this.icon);
        this.initFor();
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
    
    getValue() {
        return this.input.val();
    }

    setValue(string) {
        this.input.val(string);
    }

    isValid() {
        // Validate regex: 1 capital letter, 1 number, 1 special character, and size 8;
        const validations = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/; 

        if (validations.test(this.input.val())) {
            this.valid = true;
            return this.valid;
        }

        return this.valid;
    }

    getDisabled() {
        return this.disabled;
    }

    setDisabled(boolean) {
        this.input.prop('disable', boolean);
        this.disabled = boolean;
    }

    isDisabled() {
        if (this.input.prop('disabled')) {
            this.disabled = true;
            return this.disabled;
        }

        return this.disabled;
    }

    getRequired() {
        return this.required;
    }

    setRequired(boolean) {
        this.input.prop('required', boolean);
        this.required = boolean;
    }

    isRequired() {
        if (!this.input.prop('required')) {
            this.required = false;
            return this.required;
        }

        return this.required;
    }
}
