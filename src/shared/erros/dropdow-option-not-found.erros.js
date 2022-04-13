export default class DropdownOptionNotFound extends Error {
    constructor(notFoundMessage) {
        super(notFoundMessage);
        this.message = notFoundMessage;
        this.name = 'OptionNotFound';
    }
}
