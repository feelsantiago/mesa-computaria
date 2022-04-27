export default class InvalidEmail extends Error {
    constructor(notEmailValid) {
        super(notEmailValid);
        this.message = `${notEmailValid} not a valid e-mail address`;
        this.name = 'EmailInvalid';
    }
}
