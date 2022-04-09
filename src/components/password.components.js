import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString, valid = false) {
        this.div = $(queryString);
        this.input = $(`${queryString} input[type="password"]`);
        this.icon = $(`${queryString} input[type="password"]+i`);

        this.valid = valid;

        this.checkQuery(this.div, this.input, this.icon);
        this.initFor();
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
        const validations = /^(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&()*,.:<>?@^{|}])[\d!"#$%&()*,.:<>?@A-Z^a-z{|}]{8,}$/;

        if (validations.test(this.input.val())) {
            this.valid = true;
            return this.valid;
        }

        this.valid = false;
        return this.valid;
    }

    setDisabled(boolean) {
        this.input.prop('disabled', boolean);
    }

    isDisabled() {
        if (this.input.prop('disabled')) {
            this.input.prop('disable', true);
            return this.input.prop('disabled');
        }

        this.input.prop('disabled', false);
        return this.input.prop('disabled');
    }

    setRequired(boolean) {
        this.input.prop('required', boolean);
    }

    isRequired() {
        if (!this.input.prop('required')) {
            this.input.prop('required', false);
            return this.input.prop('required');
        }

        this.input.prop('required', true);
        return this.input.prop('required');
    }
}
