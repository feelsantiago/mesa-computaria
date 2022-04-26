import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import { LayoutProviderService } from '../layout-provider.service';

describe('[LayoutProviderService]', () => {
    describe('[inject]', () => {
        it('Should load content on DOM', () => {
            const content = 'Test Mock Page';
            vi.spyOn($.fn, 'html');

            document.body.innerHTML = '<div id="app"></div>';
            LayoutProviderService.inject(`<h1>${content}</h1>`, undefined, true);

            expect($.fn.html).toBeCalledTimes(1);
            expect($('#app h1').html()).toBe('Test Mock Page');
        });

        it('Should throw error if page is not a string', () => {
            try {
                LayoutProviderService.inject(0);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBeDefined();
            }
        });
    });
});
