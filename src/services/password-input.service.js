import $ from 'jquery';

export default class PasswordInput {
    initFor(queryIcon) {
        const toggleIcon = $(queryIcon);
        toggleIcon.on('click', () => {
            if ($('#pw_input').attr('type') == 'password') {
                $('#pw_input').attr('type', 'text');
                $('#eye_icon').attr('class', 'fa-solid fa-eye');
              } else {
                  $('#pw_input').attr('type', 'password');
                  $('#eye_icon').attr('class', 'fa-solid fa-eye-slash');
              }
        });
    }
}

export const PasswordInputService = new PasswordInput();
