import $ from 'jquery';
import StringUtils from '../utils/string';

export default class LayoutProvider {
    inject(page, callback, overrideTestEnvironment = false) {
        if (overrideTestEnvironment || !process.env.NODE_ENV === 'test') {
            if (!StringUtils.isEmptyOrBlank(page)) {
                $('#app').html(page);
            }

            if (callback) {
                callback();
            }
        }
    }
}

export const LayoutProviderService = new LayoutProvider();
