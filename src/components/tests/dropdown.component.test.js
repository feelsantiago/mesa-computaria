import { beforeEach, describe, expect, it, afterEach } from 'vitest';
import $ from 'jquery';
import DropdownComponent from '../dropdown.component';

describe('[DropdownComponent]', () => {
    let dropdown;
    let dropdownUnrequired;

    beforeEach(() => {
        const html = $.parseHTML(`
        <div class="row-dropdown-input container" id="test">
            <fieldset class="dropdown-container">
            <button type="button" class="dropdown dropdown-btn" id="btn"></button>
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
        dropdown = new DropdownComponent('#test', 'Game Type');
    });

    afterEach(() => {
        $('#test').remove();
    });

    it('Should load elements and add events on dropdown instanciation', () => {
        expect(dropdown._btn.length > 0).toBeTruthy();
        expect(dropdown._list.length > 0).toBeTruthy();
        expect(dropdown._items.length > 0).toBeTruthy();

        /* eslint-disable no-underscore-dangle */
        expect($._data(dropdown._btn.get(0), 'events')).toBeDefined();
        expect($._data(dropdown._items.get(0), 'events')).toBeDefined();
        /* eslint-anable no-underscore-dangle */
    });

    describe('[dropdownClickEvent]', () => {
        it('Should change a dropdown list style display from none to block', () => {
            dropdown._list.toggle();
            dropdown._btn.trigger('click');
            expect(dropdown._list.attr('style')).toEqual('display: block;');
        });

        it('Should change a dropdown list style display from block to none', async () => {
            dropdown._btn.trigger('click');
            expect(dropdown._list.attr('style')).toEqual('display: none;');
        });
    });

    describe('[itemClickEvent]', () => {
        it('Should change selection new item and unselect previous one', async () => {
            const option = $('#dnd');
            const previousSelected = $('#selected');

            option.trigger('click');
            expect(option.hasClass('selected')).toBeTruthy();
            expect(previousSelected.hasClass('selected')).toBeFalsy();
            expect(dropdown._btn.text()).toEqual(option.text());
            expect(dropdown._list.attr('style')).toEqual('display: none;');
        });
    });

    describe('[setSelection]', () => {
        it('Should set one of dropdown items selected via code', async () => {
            const selectOne = $('#selected');
            const dnd = $('#dnd');
            const vamp = $('#vampire');

            expect(() => {
                dropdown.setSelection('Bla bla bla');
            }).toThrow('Bla bla bla are not included in this dropdown');

            dropdown.setSelection('Dugeons&Dragons');
            expect(dropdown._btn.text()).toEqual(dropdown.selected);
            expect(dnd.hasClass('selected')).toBeTruthy();

            dropdown.setSelection('Vampire 5e');
            expect(dropdown._btn.text()).toEqual(dropdown.selected);
            expect(vamp.hasClass('selected')).toBeTruthy();

            dropdown.setSelection('Select one');
            expect(dropdown._btn.text()).toEqual(dropdown.placeholder);
            expect(selectOne.hasClass('selected')).toBeTruthy();
        });
    });

    describe('[unselect]', () => {
        it('should set default to the dropdown', async () => {
            const dnd = $('#dnd');
            const vamp = $('#vampire');

            dnd.trigger('click');
            dropdown.unselect();
            expect(dropdown._btn.text()).toEqual(dropdown.placeholder);

            vamp.trigger('click');
            dropdown.unselect();
            expect(dropdown._btn.text()).toEqual(dropdown.placeholder);
        });
    });

    describe('[selected]', () => {
        it('Should return HTML text value from current selected item', async () => {
            const dnd = $('#dnd');
            const vamp = $('#vampire');

            expect(dropdown.selected).toEqual(dropdown.defaultOption);

            dnd.trigger('click');
            expect(dropdown.selected).toEqual(dnd.text());

            vamp.trigger('click');
            expect(dropdown.selected).toEqual(vamp.text());
        });
    });

    describe('[enabledState]', () => {
        it('Should return enabled state default or disalbe if setted', async () => {
            expect(dropdown.disabled).toBeFalsy();

            dropdown.disable();
            expect(dropdown.disabled).toBeTruthy();

            dropdown.enable();
            expect(dropdown.disabled).toBeFalsy();
        });
    });

    describe('[requiredState]', () => {
        beforeEach(() => {
            const otherDropdown = $.parseHTML(`      
            <div class="row-dropdown-input container" id="testUnrequired">
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

            $(document.body).append(otherDropdown);
            dropdownUnrequired = new DropdownComponent('#testUnrequired', 'Game type', false);
        });

        afterEach(() => {
            $('#testUnrequired').remove();
        });

        it('Should be default required or unrequired if set false on instantiation', async () => {
            expect(dropdown.required).toBeTruthy();
            expect(dropdownUnrequired.required).toBeFalsy();
        });
    });

    describe('[validState]', () => {
        it('Should be default invalid util an item be selected', async () => {
            const selectOne = $('#selected');
            const dnd = $('#dnd');
            const vamp = $('#vampire');

            expect(dropdown.valid).toBeFalsy();

            dnd.trigger('click');
            expect(dropdown.valid).toBeTruthy();

            vamp.trigger('click');
            expect(dropdown.valid).toBeTruthy();

            selectOne.trigger('click');
            expect(dropdown.valid).toBeFalsy();
        });
    });

    describe('[options]', () => {
        it('should return a list of options in the dropdown', async () => {
            expect(dropdown.options()).toContain('Select one');
            expect(dropdown.options()).toContain('Dugeons&Dragons');
            expect(dropdown.options()).toContain('Vampire 5e');
            expect(dropdown.options()).toContain('Select one', 'Dugeons&Dragons', 'Vampire 5e');
        });
    });
});
