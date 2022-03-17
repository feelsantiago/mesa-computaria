import $, { error } from 'jquery';


export default class PasswordInput {
  initFor(queryInput) {

    const input = $(`${queryInput} input`);
    const icon = $(`${queryInput} input+i`);
    const errorMessage = `Can't query input and/or icon const`;
    
    icon.on('click', () => {

      if (input.length === 0 || icon.length === 0) {

        throw new Error(errorMessage);
        
      }

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
