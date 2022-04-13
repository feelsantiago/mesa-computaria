import $ from 'jquery';
import DropdownOptionNotFound from '../shared/erros/dropdow-option-not-found.erros';

export default class DropdownComponent {
    constructor(query, required = true) {
        this.query = query;
        this.required = required;
        this.disabled = false;
        this.valid = false;

        this.container = $(`${query} .dropdown-container`);
        this.btn = $(`${query} .dropdown-btn`);
        this.list = $(`${query} .dropdown-list`);
        this.items = $(`${query} .dropdown-item`);
        this.currentSelected = $(`${query} .selected`);

        this.defaultText = this.btn.text();
        this.defaultOption = this.currentSelected.text();

        this._addDropdownClickEventListener();
        this._addItemClickEventListener();
    }

    setSelection(item) {
        let notFound = true;
        for (const element of this.items) {
            if (element.textContent.toLowerCase() === item.toLowerCase()) {
                notFound = false;
                this._select(element);
            }
        }
        if (notFound) {
            throw new DropdownOptionNotFound(item);
        }
    }

    selected() {
        return this.currentSelected.text();
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

    _addDropdownClickEventListener() {
        this.btn.on('click', () => {
            this.list.toggle();
        });
    }

    _addItemClickEventListener() {
        this.items.on('click', (event) => {
            this._select(event.currentTarget);
            this.list.toggle();
        });
    }

    _select(item) {
        this.currentSelected = $(item);
        this._update(this.selected());
    }

    _update(selection) {
        this.items.removeClass('selected');
        this.currentSelected.addClass('selected');
        this._change(selection);
        this.validation();
    }

    unselect() {
        this.setSelection(this.defaultOption);
    }

    _change(text) {
        if (text === this.defaultOption) {
            this.btn.html(this.defaultText);
        } else {
            this.btn.html(text);
        }
    }

    validation() {
        this.valid = this.btn.text() !== this.defaultText;
        return this._valid;
    }
}
