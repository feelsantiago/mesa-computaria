import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import $ from 'jquery';
import CheckboxComponent from '../checkbox.component';

describe('[CheckBoxComponente]', () => {
    let checkbox;

    beforeEach(() => {
        const html = $.parseHTML(`
        <div class="row-checkbox" id="test">
            <fieldset class="checkbox-container container">
                <input type="checkbox" class="checkbox-square" />
                <p class="checkbox-label"></p>
            </fieldset>
        </div>`);

        $(document.body).append(html);
        checkbox = new CheckboxComponent('#test', 'lembre-se', true);
    });

    afterEach(() => {
        $('#test').remove();
    });

    it.only(['Should load elements and add events on checkbox instanciation'], () => {
        expect(checkbox._square.length > 0).toBeTruthy();
        expect(checkbox._label.length > 0).toBeTruthy();

        expect($._data(checkbox._square.get(0), 'events')).toBeDefined();
    });

    describe('[checkboxClickEvent]', () => {
        it('Should toggle checked state', async () => {
            expect(checkbox._filled.is(':checked')).toBeFalsy();
            checkbox.setCheck();
            expect(checkbox._filled.is(':checked')).toBeTruthy();
            checkbox.setUncheck();
            expect(checkbox._filled.is(':checked')).toBeFalsy();
        });

        it('Should change valid state based on checked true or false', async () => {
            expect(checkbox.valid).toBeFalsy();
            checkbox.setCheck();
            expect(checkbox.valid).toBeTruthy();
            checkbox.setUncheck();
            expect(checkbox.valid).toBeFalsy();
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
    });
});
