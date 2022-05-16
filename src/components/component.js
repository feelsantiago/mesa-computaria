import $ from 'jquery';

export default class Component {
    constructor(query, required = true) {
        this.query = query;
        this.required = required;
        this.disabled = false;
        this._component = $(`${query} .component`);
    }

    disable() {
        this._component.css('pointer-events', 'none');
        this._component.prop('disabled', true);
        this.disabled = this._container.is(':disabled');
    }

    enable() {
        this._component.css('pointer-events', 'auto');
        this._component.prop('disabled', false);
        this.disabled = this._container.is(':disabled');
    }
}
