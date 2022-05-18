import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import $ from 'jquery';
import CheckboxComponent from '../checkbox.component';

describe('[CheckBoxComponent]', () => {
    let checkbox;
    let checkboxNotRequired;

    beforeEach(() => {
        const html = $.parseHTML(`
        <div class="row-checkbox" id="test">
            <fieldset class="checkbox-container component">
                <input type="checkbox" class="checkbox" />
                <p class="checkbox-label"></p>
            </fieldset>
        </div>`);

        $(document.body).append(html);
        checkbox = new CheckboxComponent('#test', 'lembre-se');
    });

    afterEach(() => {
        $('#test').remove();
    });

    it(['Should load elements and add events on checkbox instantiation'], () => {
        expect(checkbox._checkbox.length > 0).toBeTruthy();
        expect(checkbox._label.length > 0).toBeTruthy();

        expect($._data(checkbox._checkbox.get(0), 'events')).toBeDefined();
    });

    describe('[checkboxClickEvent]', () => {
        it('Should mark checked when click in the unchecked box', async () => {
            expect(checkbox._checkbox.is(':checked')).toBeFalsy();
            checkbox._checkbox.trigger('click');
            expect(checkbox._checkbox.is(':checked')).toBeTruthy();
        });

        it('Should unmarked checked when click in the checked box', async () => {
            checkbox._checkbox.trigger('click');
            expect(checkbox._checkbox.is(':checked')).toBeTruthy();

            checkbox._checkbox.trigger('click');
            expect(checkbox._checkbox.is(':checked')).toBeFalsy();
        });

        it('Should change checked state based on checked true or false', async () => {
            expect(checkbox.checked).toBeFalsy();

            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeTruthy();

            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeFalsy();
        });
    });

    describe('[setLabel]', () => {
        it('Should override the checkbox text label', async () => {
            expect(checkbox.text).toEqual('lembre-se');

            checkbox.setLabel('Remember-me');

            expect(checkbox.text).toEqual('Remember-me');
        });
    });

    describe('[check]', () => {
        it('Should mark checked in the checkbox', async () => {
            checkbox.check();
            expect(checkbox.checked).toBeTruthy();
        });
    });

    describe('[uncheck]', () => {
        it('Should mark unchecked in the checkbox', async () => {
            checkbox.check();
            expect(checkbox.checked).toBeTruthy();

            checkbox.uncheck();
            expect(checkbox.checked).toBeFalsy();
        });
    });

    describe('[toggle]', () => {
        it('Should toggle checked or unchecked state ', async () => {
            checkbox.toggle();
            expect(checkbox.checked).toBeTruthy();
            checkbox.toggle();
            expect(checkbox.checked).toBeFalsy();

            checkbox.check();
            expect(checkbox.checked).toBeTruthy();
            checkbox.toggle();
            expect(checkbox.checked).toBeFalsy();

            checkbox.toggle();
            expect(checkbox.checked).toBeTruthy();
            checkbox.uncheck();
            expect(checkbox.checked).toBeFalsy();
        });
    });

    describe('[enabledState]', () => {
        it('Should return enabled state default or disabled if settled', async () => {
            expect(checkbox.disabled).toBeFalsy();

            checkbox.disable();
            expect(checkbox.disabled).toBeTruthy();

            checkbox.enable();
            expect(checkbox.disabled).toBeFalsy();
        });

        it('Should allow mark checked only by the check method', async () => {
            checkbox.disable();

            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeFalsy();

            checkbox.check();
            expect(checkbox.checked).toBeTruthy();
        });

        it('Should allow mark unchecked only by the uncheck method', async () => {
            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeTruthy();

            checkbox.disable();

            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeTruthy();

            checkbox.uncheck();
            expect(checkbox.checked).toBeFalsy();
        });
    });

    describe('[requiredState]', () => {
        beforeEach(() => {
            const html = $.parseHTML(`
            <div class="row-checkbox" id="notRequired">
                <fieldset class="checkbox-container container">
                    <input type="checkbox" class="checkbox" />
                    <p class="checkbox-label"></p>
                </fieldset>
            </div>`);

            $(document.body).append(html);
            checkboxNotRequired = new CheckboxComponent('#notRequired', 'lembre-se', false);
        });

        afterEach(() => {
            $('#unrequired').remove();
        });

        it('Should be default required or notRequired if set false on instantiation', async () => {
            expect(checkbox.required).toBeTruthy();
            expect(checkboxNotRequired.required).toBeFalsy();
        });
    });
});
