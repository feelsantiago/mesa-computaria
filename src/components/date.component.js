import $ from 'jquery';
import Component from './component';

export default class DateInput extends Component {
    constructor(query, required = false) {
        super(query, required);
        this._div = $(query);
        this._input = $(`${query} input[type="date"]`);

        this.value = this._input.val();
        this.valid = false;
    }

    setValue(string) {
        this._input.val(string);
        this.value = this._input.val();
        this.valid = this.validate();
    }

    validate() {
        /*
        Regex validation in format yyyy-mm-dd from 1900 to 2099 valid years, 01-12 months and 01-31 days
        */
        const validations = /^(19|20)\d\d[ ./-](0[1-9]|1[0-2])[ ./-](0[1-9]|[12]\d|3[01])$/;

        this.valid = validations.test(this.value);

        return this.valid;
    }
}
