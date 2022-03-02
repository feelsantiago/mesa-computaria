import $ from 'jquery';
import StringUtils from '../utils/string';

export default class LayoutProvider {

    async inject(page) {
       const content =  await this.loadContent(page);

        if (StringUtils.isEmptyOrBlank(content.default)) {
            throw new Error(`Unable to load page ${page} - Content Not Found`);
        }

        $('#app').html(content.default);
    }

    async loadContent(page) {
        try {
            return import(`/src/pages/${page}/index.html?raw`);
        } catch {
            return {};
        }
    }
}

export const LayoutProviderService = new LayoutProvider();

