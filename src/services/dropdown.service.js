import $ from 'jquery';

export default class Dropdown {
    toggleList() {
        $('.dropdown-btn').on('click', () => {
            $('.dropdown-list').toggle();
        });
    }

    itemSelect() {
        const optionSelected = $('.dropdown-item');

        optionSelected.on('click', (event) => {
            this.unselect();
            console.log(event);
        });
    }

    unselect() {
        const optionSelected = $('.selected');
        $('.dropdown-item').on('click', () => {
            optionSelected.removeClass('selected');
        });
    }
}

export const DropdownService = new Dropdown();
