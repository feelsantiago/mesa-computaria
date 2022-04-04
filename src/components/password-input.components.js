import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString) {
        this.div = $(queryString);
        this.input = $(`${queryString} input[type='password']`);
        this.icon = $(`${queryString} input+i`);
        this.button = $(`${queryString} input[type='button']`);
        this.span = $(`${queryString} span`);

        this.hasQuery(this.div, this.input, this.icon, this.button, this.span);
        this.initFor();
        this.isValid();
    }

    hasQuery(div, input, icon, button, span) {
        if (div.length === 0) {
            throw new Error('Failed to query div');
        }

        if (input.length === 0) {
            throw new Error('Failed to query input password');
        }

        if (icon.length === 0) {
            throw new Error('Failed to query icon');
        }

        if (button.length === 0) {
            throw new Error('Failed to query input button');
        }

        if (span.length === 0) {
            throw new Error('Failed to query span');
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
        this.button.on('click', () => {
            const pswd = this.input.val();

            this.input.prop('required', true);

            const clearText = () => {
                setTimeout(() => {
                    this.span.text('');
                }, 2000);

                this.input.trigger('focus');
            };

            if (pswd === '') {
                this.span.text('Password can not be empty.');
                clearText();
                return false;
            }

            if (pswd.length < 8) {
                this.span.text('Must contain at least 8 characters');
                clearText();
                return false;
            }

            if (!/[A-Z]/.test(pswd)) {
                this.span.text('Must cointain at least 1 capital letter');
                clearText();
                return false;
            }

            if (!/\d/.test(pswd)) {
                this.span.text('Must contain at least 1 number');
                clearText();
                return false;
            }

            if (!/[!#%&()*@^{}~]+/.test(pswd)) {
                this.span.text('Must contain at least 1 special character');
                clearText();
                return false;
            }

            return true;
        });
    }
}
