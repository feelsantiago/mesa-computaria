import $ from 'jquery';

export default class DropdownComponent {
    constructor(query) {
        this.query = query;

        this.dropdownContainer = $(`${query} .dropdown-container`);
        this.btn = $(`${query} .dropdown-btn`);
        this.list = $(`${query} .dropdown-list`);
        this.items = $(`${query} .dropdown-item`);
        this.selectedItem = $(`${query} .selected`);

        this.enabled = true;

        this.addDropdownClickEventListner();
        this.addItemClickEventListner();
    }

    getSelectedItem() {
        return this.selectedItem.text();
    }

    checkQuery() {
        if (
            this.query.length === 0 ||
            this.dropdownContainer.length === 0 ||
            this.btn.length === 0 ||
            this.list.length === 0 ||
            this.items.length === 0
        ) {
            return false;
        }
        return true;
    }

    setEnabled() {
        this.enabled = this.dropdownContainer.prop('disabled', false);
        this.dropdownContainer.removeClass('disabled');
        this.enabled = true;
    }

    setDisabled() {
        this.enabled = this.dropdownContainer.prop('disabled', true);
        this.dropdownContainer.addClass('disabled');
        this.enabled = false;
    }

    isEnabled() {
        return this.enabled;
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
