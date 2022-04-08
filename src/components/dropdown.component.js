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

        this.addDropdownClickEventListener();
        this.addItemClickEventListener();
    }

    setSelection(item) {
        // eslint-disable-next-line no-restricted-syntax
        for (const element of this.items) {
            if (element.textContent === item) {
                this.select(element);
            }
        }
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

    addDropdownClickEventListener() {
        this.btn.on('click', () => {
            this.list.toggle();
        });
    }

    addItemClickEventListener() {
        this.items.on('click', (event) => {
            this.select(event.currentTarget);
            this.list.toggle();
        });
    }

    update(selectedItem) {
        this.unselectItem();
        if (selectedItem === this.unselectedDefaultText) {
            this.btn.html(this.defaultText);
        } else {
            this.btn.html(selectedItem);
        }
        this.selectedItem.addClass('selected');
        this.validation();
    }

    unselectItem() {
        this.items.removeClass('selected');
    }

    select(item) {
        this.selectedItem = $(item);
        this.update(this.selectedItem.text());
    }
}
