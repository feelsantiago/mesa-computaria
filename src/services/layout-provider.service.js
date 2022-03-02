import $ from 'jquery';
import StringUtils from '../utils/string';

export default class LayoutProvider {

    async inject(page) {
       const content =  await this.loadContent(page);

        if (StringUtils.isEmptyOrBlank(content)) {
            throw new Error(`Unable to load page ${page} - Content Not Found`);
        }

        $('#app').html(content);
    }

    async loadContent(page) {
        return import(`/src/pages/${page}/index.html?raw`);
    }
}

export const LayoutProviderService = new LayoutProvider();

