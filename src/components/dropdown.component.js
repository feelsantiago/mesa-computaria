import $ from 'jquery';

export default class DropdownComponent {
    constructor(query) {
        this.query = query;

        this.dropdownContainer = $(`${query} .dropdown-container`);
        this.btn = $(`${query} .dropdown-btn`);
        this.items = $(`${query} .dropdown-item`);
        this.list = $(`${query} .dropdown-list`);
        this.selectedItem = $(`${query} .selected`);

        this.enabled = this.dropdownContainer.attr('disabled');

        this.addDropdownClickEventListner();
        this.addItemClickEventListner();
    }

    setEnabled(boolean) {
        this.enabled = this.dropdownContainer.prop('disabled', boolean);
        if (boolean) {
            this.dropdownContainer.removeClass('disabled');
        } else {
            this.dropdownContainer.addClass('disabled');
        }
    }

    isEnabled() {
        if (this.enabled.attr('disabled')) {
            return false;
        }
        return true;
    }

    addDropdownClickEventListner() {
        this.btn.on('click', () => {
            this.list.toggle();
        });
    }

    addItemClickEventListner() {
        this.items.on('click', (event) => {
            this.unselectItem();
            this.selectItem(event.currentTarget);
            this.list.toggle();
        });
    }

    updateDropdown() {
        this.btn.html(this.selectedItem.text());
    }

    unselectItem() {
        this.items.removeClass('selected');
    }

    selectItem(item) {
        this.selectedItem = $(item);
        this.selectedItem.addClass('selected');
        this.updateDropdown();
    }
}
