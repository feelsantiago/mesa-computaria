import $ from 'jquery';

export default class PasswordInput {
    initFor(queryInput) {
        const input = $(`${queryInput} input`);
        const icon = $(`${queryInput} input~i`);

        console.log(input);
        console.log(icon);

        icon.on('click', () => {
            if (input.attr('type') === 'password') {

                input.attr('type', 'text');
                icon.attr('class', 'fa-solid fa-eye');

              } else {

                input.attr('type', 'password');
                icon.attr('class', 'fa-solid fa-eye-slash');

              }
        });
    }
}

export const PasswordInputService = new PasswordInput();
