import $ from 'jquery';

export default class PasswordInput {
    initFor(queryString) {
        const passwordText = $(queryString); // Capturar com jQuery
        passwordText.on('click', () => {
            if ( $('#pw-input').attr('type') === 'password' ) {
                $('#pw-input').attr('type', 'text');
                $('#eye-icon').attr('class', 'fa-solid fa-eye');
              } else {
                  $('#pw-input').attr('type', 'password');
                  $('#eye-icon').attr('class', 'fa-solid fa-eye-slash');
              }
        });
    }
}

export const PasswordInputService = new PasswordInput();
