import $ from 'jquery';

export default class CheckBoxComponent {
    constructor(query, required = false) {
        this.query = query;
        this.required = required;
        this.valid = false;
        this.disabled = false;

        this._filled = $(`${query} .filled`);
        this._checkboxContent = $(`${query} .checkbox-group-filled`);

        this._addClickEventListnet();
    }

    validate() {
        this.valid = this._filled.attr('toggle');
    }

    checked() {
        console.log(this._filled.is('checked'));
    }

    disable() {
        this._checkboxContent.css('pointer-events', 'none');
        this._checkboxContent.prop('disabled', true);
        this.disabled = this._checkboxContent.is(':disabled');
    }

    enable() {
        this._checkboxContent.css('pointer-eventes', 'auto');
        this._checkboxContent.prop('disabled', false);
        this.disabled = this._checkboxContent.is(':disabled');
    }

    _addClickEventListnet() {
        this._filled.on('click', () => {
            console.log(this._filled.attr('checked'));
        });
    }
}
