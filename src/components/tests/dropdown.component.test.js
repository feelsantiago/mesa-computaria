import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest';
import $ from 'jquery';
import DropdownComponent from '../dropdown.component';

describe('[DropdownComponent]', () => {
    let dropdown;

    beforeEach(() => {
        const html = $.parseHTML(`
        <div id="container" class="container">
            <div class="dropdown-place" id="test">
            <button type="button" class="dropdown dropdown-btn" id="btn">Game Type</button>
                <div class="dropdown dropdown-list" id="list" style="display: block;">
                    <ul>
                        <li class="dropdown-item selected" id="selected">Select one</li>
                        <li class="dropdown-item" id="dnd">Dugeons&Dragons</li>
                        <li class="dropdown-item" id="vampire">Vampire 5e</li>
                    </ul>
                </div>
            </div>
        </div>`);

        $(document.body).append(html);

        dropdown = new DropdownComponent('#test');
    });

    afterEach(() => {
        $('#container').remove();
    });

    it('Should load elements and add events on dropdown instanciation', () => {
        // instanciar
        // verificar this.btn, this.list
        // verificar eventos dos clicks foram adicionados
    });

    describe('[addDropdownClickEventListner]', () => {
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

    describe('[addItemClickEventListner]', () => {
        it('Should change selection to new item and unselect previous one, also apply new selected text to the dropdown and toggle off items list', async () => {
            const selectedItem = $('#dnd');
            const previousSelected = $('#selected');

            selectedItem.trigger('click');
            expect(selectedItem.hasClass('selected')).toBeTruthy();
            expect(previousSelected.hasClass('selected')).toBeFalsy();
            expect(dropdown.btn.text()).toEqual(selectedItem.text());
            expect(dropdown.list.attr('style')).toEqual('display: none;');
        });
    });
});
