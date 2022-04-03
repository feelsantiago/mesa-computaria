import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString) {
        this.div = $(queryString);
        this.input = $(`${queryString} input[type='password']`);
        this.icon = $(`${queryString} input+i`);

        this.checkQuery(this.div, this.input, this.icon);
        this.initFor();
        this.verifyPswd();
    }

    checkQuery(div, input, icon) {
        if (div.length === 0) {
            throw new Error('Failed to query div');
        }

        if (input.length === 0) {
            throw new Error('Failed to query input');
        }

        if (input.attr('type') !== 'password') {
            throw new Error('Input query is not password type');
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

    verifyPswd() {
        $('#button').on('click', () => {
            const pswd = this.input.val();
            this.input.trigger('focus');

            if (pswd === '') {
                $('#message').text('Password can not be empty.');
                return false;
            }

            if (pswd.length < 8) {
                $('#message').text('Must contain at least 8 characters');
                return false;
            }

            if (!/[A-Z]/.test(pswd)) {
                $('#message').text('Must cointain at least 1 capital letter');
                return false;
            }

            if (!/\d/.test(pswd)) {
                $('#message').text('Must contain at least 1 number');
            }

            if (!/[*@!#%&()^~{}]+/.test(pswd)) {
                $('#message').text('Must contain at least 1 special character');
            } else {
                $('#message').text('Done');
            }

            return true;
        });
    }
}
