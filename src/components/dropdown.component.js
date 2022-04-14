import $ from 'jquery';
import DropdownOptionNotFound from '../shared/erros/dropdow-option-not-found.erros';

export default class DropdownComponent {
    constructor(query, required = true) {
        this.query = query;
        this.required = required;
        this.disabled = false;
        this.valid = false;

        this._container = $(`${query} .dropdown-container`);
        this._btn = $(`${query} .dropdown-btn`);
        this._list = $(`${query} .dropdown-list`);
        this._items = $(`${query} .dropdown-item`);
        this._currentSelected = $(`${query} .selected`);

        this.selected = this._currentSelected.text();
        this._defaultText = this._btn.text();
        this.defaultOption = this._currentSelected.text();

        this._addDropdownClickEventListener();
        this._addItemClickEventListener();
    }

    options() {
        const dropdownOptions = [];
        for (const element of this._items) {
            dropdownOptions.push(element.textContent);
        }
        return dropdownOptions;
    }

    setSelection(item) {
        let notFound = true;
        for (const element of this._items) {
            if (element.textContent.toLowerCase() === item.toLowerCase()) {
                notFound = false;
                this._select(element);
            }
        }
        if (notFound) {
            throw new DropdownOptionNotFound(item);
        }
    }

    enable() {
        this._container.css('pointer-events', 'auto');
        this._container.prop('disabled', false);
        this.disabled = this._container.is(':disabled');
    }

    disable() {
        this._container.css('pointer-events', 'none');
        this._container.prop('disabled', true);
        this.disabled = this._container.is(':disabled');
    }

    _addDropdownClickEventListener() {
        this._btn.on('click', () => {
            this._list.toggle();
        });
    }

    _addItemClickEventListener() {
        this._items.on('click', (event) => {
            this._select(event.currentTarget);
            this._list.toggle();
        });
    }

    _select(item) {
        this._currentSelected = $(item);
        this.selected = this._currentSelected.text();
        this._update(this.selected);
    }

    _update(selection) {
        this._items.removeClass('selected');
        this._currentSelected.addClass('selected');
        this._change(selection);
        this.validation();
    }

    unselect() {
        this.setSelection(this.defaultOption);
    }

    _change(text) {
        if (text === this.defaultOption) {
            this._btn.html(this._defaultText);
        } else {
            this._btn.html(text);
        }
    }

    validation() {
        this.valid = this._btn.text() !== this._defaultText;
        return this._valid;
    }
}
