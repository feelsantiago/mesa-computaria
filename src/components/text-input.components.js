import $ from 'jquery';

export default class Input {
    
    constructor(query){
        this.query = $(query);
        this.isValid();
    }

    getInput(){
        return this.query;
    }

    setInput(query){
        this.query = query;
    }
    
    isValid(query){
        query.validate({
            rules: {
                text: {
                    required: true,
                    minlength: 1
                }, 
                email: {
                    required: true,
                    email: true
                }
            }
        });
    }
    

}