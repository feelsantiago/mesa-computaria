import $ from 'jquery';

export default class Component {
    constructor(query, required = true) {
        this.query = query;
        this.required = required;
        this.disabled = false;
        this._container = $(`${query} .container`);
    }

    disable() {
        this._container.css('pointer-events', 'none');
        this._container.prop('disabled', true);
        this.disabled = this._container.is(':disabled');
    }

    enable() {
        this._container.css('pointer-events', 'auto');
        this._container.prop('disabled', false);
        this.disabled = this._container.is(':disabled');
    }
}
