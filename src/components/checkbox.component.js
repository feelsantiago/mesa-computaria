import $ from 'jquery';
import Component from './component';

export default class CheckboxComponent extends Component {
    constructor(query, label, required = true) {
        super(query, required);
        this.valid = false;

        this._filled = $(`${query} .filled`);
        this._label = $(`${query} .label-text`);

        this._label.html(label);
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
