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

    initFor(queryInput) {
        this.icon.on('click', () => {
            if (this.input.attr('type') === 'password') {
                this.input.attr('type', 'text');
                this.icon.removeClass('fa-eye-slash');
                this.icon.addClass('fa-eye');
                this.input.trigger('focus');
            } else {
                this.input.attr('type', 'password');
                this.icon.removeClass('fa-eye');
                this.icon.addClass('fa-eye-slash');
                this.input.trigger('focus');
            }
        });
    }
}
