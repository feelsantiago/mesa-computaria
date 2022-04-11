import $ from 'jquery';

export default class DropdownComponent {
    constructor(query, required = true) {
        this.query = query;
        this.required = required;
        this._disabled = false;
        this._valid = false;

        this.container = $(`${query} .dropdown-container`);
        this.btn = $(`${query} .dropdown-btn`);
        this.list = $(`${query} .dropdown-list`);
        this.items = $(`${query} .dropdown-item`);
        this._selectedItem = $(`${query} .selected`);

        this._defaultText = this.btn.text();
        this._defaultOption = this._selectedItem.text();

        this.addDropdownClickEventListener();
        this.addItemClickEventListener();
    }

    setSelection(item) {
        let notFind = true;
        for (const element of this.items) {
            if (element.textContent.toLowerCase() === item.toLowerCase()) {
                notFind = false;
                this.select(element);
            }
        }
        if (notFind) {
            throw new Error('Not find');
        }
    }

    getSelectedItem() {
        return this._selectedItem.text();
    }

    isDisabled() {
        return this._disabled;
    }

    isValid() {
        return this._valid;
    }

    enable() {
        this.container.css('pointer-events', 'auto');
        this.container.prop('disabled', false);
        this._disabled = this.container.is(':disabled');
    }

    disable() {
        this.container.css('pointer-events', 'none');
        this.container.prop('disabled', true);
        this._disabled = this.container.is(':disabled');
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

    select(item) {
        this._selectedItem = $(item);
        this._update(this._selectedItem.text());
    }

    _update(selectedItem) {
        this.items.removeClass('selected');
        this._selectedItem.addClass('selected');
        this._change(selectedItem);
        this.validation();
    }

    unselect() {
        this.setSelection(this._defaultOption);
    }

    _change(text) {
        if (text === this._defaultOption) {
            this.btn.html(this._defaultText);
        } else {
            this.btn.html(text);
        }
    }

    validation() {
        this._valid = this.btn.text() !== this._defaultText;
        return this._valid;
    }
}
