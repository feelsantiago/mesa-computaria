import $ from 'jquery';

export default class PasswordInput {
    constructor(queryInput) {
        this.div = $(queryInput);
        this.input = $(`${queryInput} input`);
        this.icon = $(`${queryInput} input+i`);

        this.checkQuery(this.div, this.input, this.icon);
        this.initFor();
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
}
