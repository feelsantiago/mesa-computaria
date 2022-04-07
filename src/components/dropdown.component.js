import $ from 'jquery';

export default class DropdownComponent {
    constructor(query, required = true) {
        this.query = query;
        this.required = required;

        this.container = $(`${query} .dropdown-container`);
        this.btn = $(`${query} .dropdown-btn`);
        this.list = $(`${query} .dropdown-list`);
        this.items = $(`${query} .dropdown-item`);
        this.selectedItem = $(`${query} .selected`);

        this.disabled = false;
        this.valid = false;

        this.defaultText = this.btn.text();
        this.unselectedDefaultText = this.selectedItem.text();

        this.addDropdownClickEventListner();
        this.addItemClickEventListner();
    }

    getSelectedItem() {
        return this.selectedItem.text();
    }

    isDisabled() {
        return this.disabled;
    }

    isValid() {
        return this.valid;
    }

    enable() {
        this.container.css('pointer-events', 'auto');
        this.container.prop('disabled', false);
        this.disabled = this.container.is(':disabled');
    }

    disable() {
        this.container.css('pointer-events', 'none');
        this.container.prop('disabled', true);
        this.disabled = this.container.is(':disabled');
    }

    validation() {
        this.valid = this.btn.text() !== this.defaultText;
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
        if (this.selectedItem.text() === this.unselectedDefaultText) {
            this.btn.html(this.defaultText);
        } else {
            this.btn.html(this.selectedItem.text());
        }
        this.validation();
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
