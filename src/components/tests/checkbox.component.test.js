import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import $ from 'jquery';
import CheckboxComponent from '../checkbox.component';

describe('[CheckBoxComponente]', () => {
    let checkbox;
    let checkboxUnrequired;

    beforeEach(() => {
        const html = $.parseHTML(`
        <div class="row-checkbox" id="test">
            <fieldset class="checkbox-container container">
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

    it(['Should load elements and add events on checkbox instanciation'], () => {
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

        it('Should unmark checked when click in the checked box', async () => {
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

    describe('[setChecked]', () => {
        it('Should mark checked in the checkbox', async () => {
            checkbox.setChecked();
            expect(checkbox.checked).toBeTruthy();
        });
    });

    describe('[setUnchecked]', () => {
        it('Should mark unchecked in the checkbox', async () => {
            checkbox.setChecked();
            expect(checkbox.checked).toBeTruthy();

            checkbox.setUnchecked();
            expect(checkbox.checked).toBeFalsy();
        });
    });

    describe('[enabledState]', () => {
        it('Should return enabled state default or disalbe if setted', async () => {
            expect(checkbox.disabled).toBeFalsy();

            checkbox.disable();
            expect(checkbox.disabled).toBeTruthy();

            checkbox.enable();
            expect(checkbox.disabled).toBeFalsy();
        });

        it('Should allow mark checked only by the setChecked method', async () => {
            checkbox.disable();

            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeFalsy();

            checkbox.setChecked();
            expect(checkbox.checked).toBeTruthy();
        });

        it('Should allow mark unchecked only by the setUnchecked method', async () => {
            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeTruthy();

            checkbox.disable();

            checkbox._checkbox.trigger('click');
            expect(checkbox.checked).toBeTruthy();

            checkbox.setUnchecked();
            expect(checkbox.checked).toBeFalsy();
        });
    });

    describe('[requiredState]', () => {
        beforeEach(() => {
            const html = $.parseHTML(`
            <div class="row-checkbox" id="unrequired">
                <fieldset class="checkbox-container container">
                    <input type="checkbox" class="checkbox" />
                    <p class="checkbox-label"></p>
                </fieldset>
            </div>`);

            $(document.body).append(html);
            checkboxUnrequired = new CheckboxComponent('#unrequired', 'lembre-se', false);
        });

        afterEach(() => {
            $('#unrequired').remove();
        });

        it('Should be default required or unrequired if set false on instantiation', async () => {
            expect(checkbox.required).toBeTruthy();
            expect(checkboxUnrequired.required).toBeFalsy();
        });
    });
});
