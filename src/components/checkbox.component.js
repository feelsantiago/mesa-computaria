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

    setChecked() {
        this._checkbox.prop('checked', true);
        this.checked = this._checkbox.is(':checked');
    }

    setUnchecked() {
        this._checkbox.prop('checked', false);
        this.checked = this._checkbox.is(':checked');
    }

    _addEventClickListner() {
        this._checkbox.on('click', () => {
            this.checked = this._checkbox.is(':checked');
        });
    }
}
