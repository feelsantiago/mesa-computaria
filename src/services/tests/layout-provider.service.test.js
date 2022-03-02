import { describe, expect, it, vi } from "vitest";
import $ from 'jquery';
import { LayoutProviderService } from '../layout-provider.service';

describe('[LayoutProviderService]', () => {

    describe('[inject]', () => {

        it('Should load content on DOM', async () => {

            const page = 'Test Mock Page';
            vi.spyOn($.fn, 'html');

            LayoutProviderService.loadContent = vi.fn().mockImplementation(() => Promise.resolve({
                default: `<h1>${page}</h1>`,
            }));

            document.body.innerHTML = '<div id="app"></div>';
            await LayoutProviderService.inject('test');

            expect(LayoutProviderService.loadContent).toBeCalledTimes(1);
            expect($.fn.html).toBeCalledTimes(1);
            expect($('#app h1').html()).toBe('Test Mock Page');
        });

        it('Should throw error if page not exist', async () => {
            // eslint-disable-next-line unicorn/no-useless-undefined
            LayoutProviderService.loadContent = vi.fn().mockImplementation(() => Promise.resolve(undefined));


            try {
               await LayoutProviderService.inject('test');
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('Unable to load page test - Content Not Found');
            }
        });
    });
});