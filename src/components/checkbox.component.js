import $ from 'jquery';
import Component from './component';

export default class CheckboxComponent extends Component {
    constructor(query, label, required = true) {
        super(query, required);
        this.valid = false;

        this._checkbox = $(`${query} .checkbox`);
        this._label = $(`${query} .checkbox-label`);

        this._label.html(label);
        this._addClickEventListner();
    }

    setChecked() {
        this._checkbox.prop('checked', true);
        this._validate();
    }

    setUnchecked() {
        this._checkbox.prop('checked', false);
        this._validate();
    }

    _addClickEventListner() {
        this._checkbox.on('click', () => {
            this._validate();
        });
    }

    _validate() {
        this.valid = this._checkbox.is(':checked');
    }
}
