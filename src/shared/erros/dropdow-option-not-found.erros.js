export default class DropdownOptionNotFound extends Error {
    constructor(notFoundMessage) {
        super(notFoundMessage);
        this.message = `${notFoundMessage} are not included in this dropdown`;
        this.name = 'OptionNotFound';
    }
}
