import $ from 'jquery';

export default class PasswordInput {
  initFor(queryInput) {

    const input = $(`${queryInput} input`);
    const icon = $(`${queryInput} input+i`);
    
    // verificar se o input & icon existe, se não existir lançar um excessão e buildar o test em cima dele. OBS: Pode usar get, jquery tem resClass

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
