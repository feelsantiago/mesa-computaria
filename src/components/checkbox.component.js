import $ from 'jquery';
import Component from './component';

export default class CheckboxComponent extends Component {
    constructor(query, label, required = true) {
        super(query, required);
        this.valid = false;

        this._square = $(`${query} .checkbox-square`);
        this._label = $(`${query} .checkbox-label`);

        this._label.html(label);
        this._addClickEventListner();
    }

    setCheck() {
        this._square.prop('checked', true);
        this._validate();
    }

    setUncheck() {
        this._square.prop('checked', false);
        this._validate();
    }

    _addClickEventListner() {
        this._square.on('click', () => {
            this._validate();
        });
    }

    _validate() {
        this.valid = this._square.is(':checked');
    }
}
