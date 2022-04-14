export default class DropdownOptionNotFound extends Error {
    constructor(option) {
        super(option);
        this.message = `${option} are not included in this dropdown`;
        this.name = 'OptionNotFound';
    }
}
