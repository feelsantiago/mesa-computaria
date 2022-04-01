import $ from 'jquery';

export default class Input {
    
    construtor(query){
        this.query = query;
        $('.input-box');
    }

    getInput(){
        return this.query;
    }

    setInput(query){
        this.query = query;
    }
    
    
    

}