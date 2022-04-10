import $ from 'jquery';

export default class TextInput {
    
    constructor(stringQuery, textEnable = false, required = true, textValid = true){

        this.stringQuery = stringQuery;

        this.textInput = $(`${stringQuery} input[type="text"]`); 

        this.emailInput = $(`${stringQuery} input[type="email"]`);
        
        this.textValid = textValid;
        this.textEnable = textEnable;
        this.required = required;
    }

    getTextInput(){
        return this.textInput.val();
    }

    setTextInput(value){
        this.textInput = this.textInput.val(value);
    }

    getTextValid(){
        return this.textValid;
    }

    setTextValid (boolean){
        this.textValid = boolean;
    }

    isTextValid(){

        if(this.textInput.val() === ''){
            this.setTextValid(false);
            return this.textValid;
        }

        return this.textValid;
    }

    isEmailEnable(){

        if (!this.emailInput.prop('disabled')) {
            return true;
        }

        return false;
        
    }

    isTextEnable(){

        if (!this.textInput.prop('disabled')) {
            return true;
        }

        return false;
        
    }

    getEmailInput(){
        return this.emailInput.val();
    }

    setEmailInput(value){
        this.emailInput = this.emailInput.val(value);
    }

    isValidEmail() {
        //Regex with a email form
        var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!EmailRegex.test(this.emailInput.val())){

            throw new Error ('not a valid e-mail address');

        }else{

            return true;
        }
    }

    getRequired() {
        return this.emailInput.prop('required');
    }

    setRequired(boolean) {
        this.emailInput.prop('required', boolean);
        this.required = boolean;
    }

    isRequired() {
        if (!this.emailInput.prop('required')) {
            this.required = false;
            return this.required;
        }

        return this.required;
    }

    getTextRequired() {
        return this.textInput.prop('required');
    }

    setTextRequired(boolean) {
        this.textInput.prop('required', boolean);
        this.required = boolean;
    }

    isTextRequired() {
        if (!this.textInput.prop('required')) {
            this.required = false;
            return this.required;
        }

        return this.required;
    }

}