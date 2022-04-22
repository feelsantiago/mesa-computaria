import { describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import { LayoutProviderService } from '../layout-provider.service';
import { TestEnvironmentError } from '../../utils/errors';

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

        it('Should throw error if running in test environment', () => {
            try {
                LayoutProviderService.inject('test page content');
            } catch (error) {
                expect(error).toBeDefined();
                expect(error).toBeInstanceOf(TestEnvironmentError);
            }
        });

        it('Should not call callback in test environments', () => {
            const callback = vi.fn();
            LayoutProviderService.inject('test page content', callback, true);

            expect(callback).not.toHaveBeenCalled();
        });
    });
});
