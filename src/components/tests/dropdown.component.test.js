import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import $ from 'jquery';
import DropdownComponent from '../dropdown.component';

describe('[DropdownComponent]', () => {
    let dropdown;

    beforeEach(() => {
        const html = $.parseHTML(`
        <div class="row-dropdown-input container" id="test">
            <fieldset class="dropdown-container">
            <button type="button" class="dropdown dropdown-btn" id="btn">Game Type</button>
                <div class="dropdown dropdown-list" id="list" style="display: block;">
                    <ul>
                        <li class="dropdown-item selected" id="selected">Select one</li>
                        <li class="dropdown-item" id="dnd">Dugeons&Dragons</li>
                        <li class="dropdown-item" id="vampire">Vampire 5e</li>
                    </ul>
                </div>
            </fieldset>
        </div>`);

        $(document.body).append(html);
        dropdown = new DropdownComponent('#test');
    });

    afterEach(() => {
        $('#test').remove();
    });

    it('Should load elements and add events on dropdown instanciation', () => {
        expect(dropdown.btn.length > 0).toBeTruthy();
        expect(dropdown.list.length > 0).toBeTruthy();
        expect(dropdown.items.length > 0).toBeTruthy();

        /* eslint-disable no-underscore-dangle */
        expect($._data(dropdown.btn.get(0), 'events')).toBeDefined();
        expect($._data(dropdown.items.get(0), 'events')).toBeDefined();
        /* eslint-anable no-underscore-dangle */
    });

    describe('[dropdownClickEvent]', () => {
        it('Should change a dropdown list style display from none to block', () => {
            dropdown.list.toggle();
            dropdown.btn.trigger('click');
            expect(dropdown.list.attr('style')).toEqual('display: block;');
        });

        it('Should change a dropdown list style display from block to none', async () => {
            dropdown.btn.trigger('click');
            expect(dropdown.list.attr('style')).toEqual('display: none;');
        });
    });

    describe('[itemClickEvent]', () => {
        it('Should change selection new item and unselect previous one', async () => {
            const selectedItem = $('#dnd');
            const previousSelected = $('#selected');

            selectedItem.trigger('click');
            expect(selectedItem.hasClass('selected')).toBeTruthy();
            expect(previousSelected.hasClass('selected')).toBeFalsy();
            expect(dropdown.btn.text()).toEqual(selectedItem.text());
            expect(dropdown.list.attr('style')).toEqual('display: none;');
        });
    });

    describe('[getSelectedItem]', () => {
        it('Should return HTML text value from current selected item', async () => {
            const PreviousSelected = $('#selected');
            const dnd = $('#dnd');
            const vamp = $('#vampire');

            expect(dropdown.getSelectedItem()).toEqual(PreviousSelected.text());
            dnd.trigger('click');
            expect(dropdown.getSelectedItem()).toEqual(dnd.text());
            vamp.trigger('click');
            expect(dropdown.getSelectedItem()).toEqual(vamp.text());
        });
    });

    describe('[checkQuery]', () => {
        it('Should verify if dropdown elements are correctly required from the DOM', async () => {
            expect(dropdown.checkQuery()).toBeTruthy();

            const otherDropdown = new DropdownComponent('#fake');
            expect(otherDropdown.checkQuery()).toBeFalsy();
        });
    });

    describe('[enabledState]', () => {
        it('Should return enabled state default or which one was set on', async () => {
            expect(dropdown.isEnabled()).toBeTruthy();

            dropdown.setDisabled();
            expect(dropdown.isEnabled()).toBeFalsy();

            dropdown.setEnabled();
            expect(dropdown.isEnabled()).toBeTruthy();
        });
    });
});
