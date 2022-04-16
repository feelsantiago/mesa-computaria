import $ from 'jquery';
import Component from './component';

export default class CheckBoxComponent extends Component {
    constructor(query, label, required = true) {
        super(query, required);
        this.valid = false;

        this._filled = $(`${query} .filled`);
        this._checkboxContent = $(`${query} .checkbox-group-filled`);
        this._labelText = $(`${query} .label-text`);

        this._labelText.html(label);
        this._addClickEventListner();
    }

    toggle() {
        this._filled.trigger('click');
    }

    _addClickEventListner() {
        this._filled.on('click', () => {
            this._validate();
        });
    }

    _validate() {
        this.valid = this._filled.is(':checked');
    }
}
