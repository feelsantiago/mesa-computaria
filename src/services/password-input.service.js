import $ from 'jquery';

export default class PasswordInput {
    checkQuery(div, input, icon) {
      if (div.length === 0) {
        throw new Error('Failed to query div');
      }
      
      if (input.length === 0) {
        throw new Error('Failed to query input');
      }

      if (input.attr('type') !== 'password' && !input.hasClass('password-input')) {
        throw new Error('Input query is not password type');
      }
   
      if (icon.length === 0) {
        throw new Error('Failed to query icon');
      }
    }

    initFor(queryInput) {
        const div = $(queryInput);
        const input = $(`${queryInput} input`);
        const icon = $(`${queryInput} input+i`);

        this.checkQuery(div, input, icon);

        icon.on('click', () => {
            if (input.attr('type') === 'password') {
                input.attr('type', 'text');
                icon.removeClass('fa-eye-slash');
                icon.addClass('fa-eye');
                input.trigger('focus');
            } else {
                input.attr('type', 'password');
                icon.removeClass('fa-eye');
                icon.addClass('fa-eye-slash');
                input.trigger('focus');
            }
        });
    }
}

export const PasswordInputService = new PasswordInput();
