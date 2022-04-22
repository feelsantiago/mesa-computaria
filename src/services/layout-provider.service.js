import $ from 'jquery';
import StringUtils from '../utils/string';

export default class LayoutProvider {
    inject(page, callback, overrideTestEnvironment = false) {
        const isTestEnvironment = process.env.NODE_ENV === 'test';
        if (overrideTestEnvironment || !isTestEnvironment) {
            if (!StringUtils.isEmptyOrBlank(page)) {
                $(() => $('#app').html(page));
            }

            if (callback) {
                callback();
            }
        }
    }
}

export const LayoutProviderService = new LayoutProvider();
