import { describe, expect, it } from 'vitest';
import $ from 'jquery';
import DateInput from '../date.component';

describe('[DateComponent]', () => {
    describe('[_checkQuery]', () => {
        it('Should throw error if query fail or the div element is not finded.', () => {
            const div = `<div id="date"></div>`;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            let date;

            expect(() => {
                date = new DateInput('#dat');
            }).toThrow('Failed to query div');
        });

        it('Should throw error if query fail or the input element is not finded.', () => {
            const div = `
                <div id="date">
                    <fieldset>
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            // eslint-disable-next-line no-unused-vars
            let date;

            expect(() => {
                date = new DateInput('#date');
            }).toThrow('Failed to query input date');
        });
    });

    describe('[get/set]', () => {
        it('Should get input value and change its state', () => {
            const div = `
                <div id="date">
                    <fieldset>
                        <input id="input-date" type="date">
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const date = new DateInput('#date');
            date.setValue('2022-05-15');

            expect(date.value).toBe('2022-05-15');
        });

        it('Should set input value and change its state', () => {
            const div = `
                <div id="date">
                    <fieldset>
                        <input id="input-date" type="date">
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const date = new DateInput('#date');
            date.setValue('2022-05-15');

            expect(date.value).toBe('2022-05-15');
            expect(date.valid).toBeTruthy();
        });
    });

    describe('[enable/disable]', () => {
        it('Should disable fieldset group and keep its state', () => {
            const div = `
            <div id="date">
                <fieldset class="container">
                    <input id="input-date" type="date">
                </fieldset>
            </div>
            `;
    
            $(document.body).html(div);
    
            const date = new DateInput('#date');
            date.disable();
    
            const inputDisabled = $('.container').prop('disabled');
    
            expect(inputDisabled).toBeTruthy();
            expect(date.disabled).toBeTruthy();
        });

        it('Should disable fieldset group and keep its state', () => {
            const div = `
            <div id="date">
                <fieldset class="container">
                    <input id="input-date" type="date">
                </fieldset>
            </div>
            `;
    
            $(document.body).html(div);
    
            const date = new DateInput('#date');
            date.enable();
    
            const inputDisabled = $('.container').prop('disabled');
    
            expect(inputDisabled).toBeFalsy();
            expect(date.disabled).toBeFalsy();
        });
    });

    describe('[validate]', () => {
        it('Should check if input value is valid and keep its state', () => {
            const div = `
                <div id="date">
                    <fieldset>
                        <input id="input-date" type="date">
                    </fieldset>
                </div>
            `;

            $(document.body).html(div);

            const date = new DateInput('#date');
            date.setValue('2022-05-15');

            expect(date.validate()).toBeTruthy();
            expect(date.valid).toBeTruthy();
        });
    });
});
