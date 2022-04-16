import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import $ from 'jquery';
import CheckboxComponent from '../checkbox.component';

describe('[CheckBoxComponente]', () => {
    let checkbox;
    // let checkboxUnrequired;

    beforeEach(() => {
        const html = $.parseHTML(`
		<div class="container-checkbox-component" id="test">
			<fieldset id="checkbox-group-filled" class="container">
				<label for="input-checkbox">
					<input type="checkbox" id="input-checkbox" name="checkbox-group-filled" class="filled" />
					<span class="label-text"></span>
				</label>
			</fieldset>
		</div>`);

        $(document.body).append(html);
        checkbox = new CheckboxComponent('test', 'lembre-se');
    });

    afterEach(() => {
        $('#test').remove();
    });

    it(['Should load elements and add events on checkbox instanciation'], () => {
        expect(checkbox._filled.length > 0).toBeTruthy();
        expect(checkbox._label.length > 0).toBeTruthy();

        expect($._data(checkbox._filled.get(0), 'events')).toBeDefined();
    });

    describe('[checkboxClickEvent]', () => {
        it('Should toggle checked state', async () => {
            expect(checkbox._filled.is(':checked')).toBeFalsy();
            checkbox.toggle();
            expect(checkbox._filled.is(':checked')).toBeTruthy();
            checkbox.toggle();
            expect(checkbox._filled.is(':checked')).toBeFalsy();
        });

        it('Should change valid state based on checked true or false', async () => {
            expect(checkbox.valid).toBeFalsy();
            checkbox.toggle();
            expect(checkbox.valid).toBeTruthy();
            checkbox.toggle();
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
