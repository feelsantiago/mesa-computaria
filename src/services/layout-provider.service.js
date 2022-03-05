import $ from 'jquery';
import StringUtils from '../utils/string';

export default class LayoutProvider {
    async inject(page) {
        if (!StringUtils.isEmptyOrBlank(page)) {
            $('#app').html(page);
        }
    }
}

export const LayoutProviderService = new LayoutProvider();
