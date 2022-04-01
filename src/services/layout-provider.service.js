import $ from 'jquery';
import { TestEnvironmentError } from '../utils/errors';
import StringUtils from '../utils/string';

export default class LayoutProvider {
    async inject(page, overrideTestEnvironment = false) {
        if (!overrideTestEnvironment && process.env.NODE_ENV === 'test') {
            throw new TestEnvironmentError();
        }

        if (!StringUtils.isEmptyOrBlank(page)) {
            $('#app').html(page);
        }
    }
}

export const LayoutProviderService = new LayoutProvider();
