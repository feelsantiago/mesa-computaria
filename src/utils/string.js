const StringUtils = {
    isEmptyOrBlank(value) {
        if (value === null || value === undefined) {
            return true;
        }

        if (typeof value !== 'string') {
            throw new TypeError('The value must be a string');
        }

        if (value.length === 0 || /^\s+$/.test(value)) {
            return true;
        }

        return false;
    },
};

export default StringUtils;
