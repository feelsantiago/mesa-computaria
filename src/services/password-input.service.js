import $, { error } from 'jquery';


export default class PasswordInput {

  hasQueryOrNot(queryInput) {

    const div = $(queryInput);
    const input = $(`${queryInput} input`);
    const icon = $(`${queryInput} input+i`);

    if (div.is('type: password')) {

      return true;

    }

    if (input.length === 0) {

      throw new Error('Failed to query input');
      
    }

    if (icon.length === 0) {

      throw new Error('Failed to query icon');
      
    }

     return true;
  }

  initFor(queryInput) {

    const input = $(`${queryInput} input`);
    const icon = $(`${queryInput} input+i`);
    
    
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
