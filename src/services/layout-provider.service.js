import $ from 'jquery';
import { TestEnvironmentError } from '../utils/errors';
import StringUtils from '../utils/string';

export default class LayoutProvider {
    inject(page, callback, overrideTestEnvironment = false) {
        if (!overrideTestEnvironment && process.env.NODE_ENV === 'test') {
            throw new TestEnvironmentError();
        }

        if (!StringUtils.isEmptyOrBlank(page)) {
            $('#app').html(page);
        }

        if (callback && !process.env.NODE_ENV === 'test') {
            callback();
        }
    }
}

export const LayoutProviderService = new LayoutProvider();
