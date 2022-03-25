import { beforeEach, describe, expect, it, vi } from 'vitest';
import $ from 'jquery';
import DropdownComponent from '../dropdown.component';

describe('[DropdownComponent]', () => {
    beforeEach(() => {
        $(document.body).html(`
        <div class="container">
            <div class="dropdown-place" id="test">
            <button type="button" class="dropdown dropdown-btn" id="btn">Game Type</button>
                <div class="dropdown dropdown-list" id="list" style="display: block;">
                    <ul>
                        <li class="dropdown-item selected" id="select">Select one</li>
                        <li class="dropdown-item" id="dnd">Dugeons&Dragons</li>
                        <li class="dropdown-item" id="vampire">Vampire 5e</li>
                    </ul>
                </div>
            </div>
        </div>`);

        const button = $('#btn');
        const list = $('#list');
        const place = $('#test');
        const items = $('li');

        vi.spyOn($.fn, 'init').mockImplementation((query) => {
            switch (query) {
                case '.dropdown-bnt':
                    return button;
                case '.dropdown-list':
                    return list;
                case '#test':
                    return place;
                default:
                    return items;
            }
        });

        // eslint-disable-next-line no-unused-vars
        const dropdown = new DropdownComponent('#test');
    });

    describe('[addDropdownClickEventListner]', () => {
        it('Should change a dropdown list style display from none to block', async () => {
            const resultDisplay = $('.dropdown-list');

            resultDisplay.toggle();
            $('.dropdown-btn').trigger('click');
            expect(resultDisplay.attr('style')).toEqual('display: block;');
        });

        it('Should change a dropdown list style display from block to none', async () => {
            const resultDisplay = $('.dropdown-list');

            $('.dropdown-btn').trigger('click');
            expect(resultDisplay.attr('style')).toEqual('display: none;');
        });
    });

    describe('[addItemClickEventListner]', () => {
        it('Should remove seleceted class from previus selected item', async () => {
            const selectedItem = $('.dropdown-item');

            console.log(selectedItem.attr('class'));
            console.log($('.dropdown-item').attr('class'));

            $('.dropdown-item').trigger('click');

            console.log(selectedItem.attr('class'));
            console.log($('.dropdown-item').attr('class'));

            expect(selectedItem.hasClass('selected')).toBeFalsy();
        });
    });
});
