// standard class with all states found in the other inputs of this work

export default class Input {
    constructor(required = true) {
        this.disabled = false;
        this.required = required;
    }

    enable() {
        this._textInput.prop('disabled', false);
        this.disabled = this._textInput.is(':disabled');
    }

    disable() {
        this._textInput.prop('disabled', true);
        this.disabled = this._textInput.is(':disabled');
    }

    setRequired(boolean) {
        this._textInput.prop('required', boolean);
        this.required = boolean;
    }

    isRequired() {
        if (!this._textInput.prop('required')) {
            this.required = false;
            return this.required;
        }

        this.required = true;
        return this.required;
    }
}
