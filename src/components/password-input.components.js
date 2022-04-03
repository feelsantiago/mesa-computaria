import $ from 'jquery';

export default class PasswordInput {
    constructor(queryString) {
        this.div = $(queryString);
        this.input = $(`${queryString} input`);
        this.icon = $(`${queryString} input+i`);

        this.checkQuery(this.div, this.input, this.icon);
        this.initFor();
        this.validation();
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

    validation() {
        $('#components').html(() => {
            $('#pswd-input')
                .on('keyup', () => {
                    const pswd = $(this).val();

                    if (pswd.length < 8) {
                        $('#length').removeClass('valid').addClass('invalid');
                    } else {
                        $('#length').removeClass('invalid').addClass('valid');
                    }

                    if (pswd.test(/[A-z]/)) {
                        $('#letter').removeClass('invalid').addClass('valid');
                    } else {
                        $('#letter').removeClass('valid').addClass('invalid');
                    }

                    if (pswd.test(/[A-Z]/)) {
                        $('#capital').removeClass('invalid').addClass('valid');
                    } else {
                        $('#capital').removeClass('valid').addClass('invalid');
                    }

                    if (pswd.test(/\d/)) {
                        $('#number').removeClass('invalid').addClass('valid');
                    } else {
                        $('#number').removeClass('valid').addClass('invalid');
                    }
                })

                .on('focus', () => {
                    $('#pswd-info').show();
                })

                .on('blur', () => {
                    $('#pswd-info').hide();
                });
        });
    }
}
