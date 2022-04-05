import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString) {
        this.div = $(queryString);
        this.input = $(`${queryString} input`);
        this.icon = $(`${queryString} input+i`);

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

    isValid() {
        const pswd = this.input.val();
        // Validate regex: at least 1 capital letter, 1 number, 1 special character, and size 8;
        const validations = /^(?=.*[A-Z])(?=.*\d)(?=.*[!$%&*?@])[\d!$%&*?@A-Za-z]{8,}$/;

        if (validations.test(pswd)) {
            return true;
        }

        return false;
    }

    isEnable() {
        if (this.isValid()) {
            this.input.prop('disabled', true);
            return true;
        }

        this.input.prop('disable', false);
        return false;
    }

    isRequired() {
        if (!this.isValid()) {
            this.input.prop('required', true);
            return true;
        }

        this.input.prop('required', false);
        return false;
    }
}
