import $ from 'jquery';

export default class PasswordInput {
    initFor(queryString) {
        const x2 = $(queryString); // Capturar com jQuery
        x2.on('click', () => {
            console.log('Clicou');
        });
    }
}

export const PasswordInputService = new PasswordInput();
