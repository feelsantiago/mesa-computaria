import $ from 'jquery';
import Component from './component';

export default class CheckboxComponent extends Component {
    constructor(query, label, required = true) {
        super(query, required);
        this.text = label;

        this._checkbox = $(`${query} .checkbox`);
        this._label = $(`${query} .checkbox-label`);
        this._label.html(this.text);
        this.checked = this._checkbox.is(':checked');

        this._addEventClickListner();
    }

    setLabel(text) {
        this.text = text;
        this._label.html(text);
    }

    check() {
        this._checkbox.prop('checked', true);
        this._update();
    }

    uncheck() {
        this._checkbox.prop('checked', false);
        this._update();
    }

    toggle() {
        if (this._checkbox.is(':checked')) {
            this._checkbox.prop('checked', false);
        } else {
            this._checkbox.prop('checked', true);
        }
        this._update();
    }

    _addEventClickListner() {
        this._checkbox.on('click', () => {
            this._update();
        });
    }

    _update() {
        this.checked = this._checkbox.is(':checked');
    }
}
