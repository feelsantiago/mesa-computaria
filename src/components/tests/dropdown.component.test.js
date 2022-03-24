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
                        <li class="dropdown-item selected">Select one</li>
                        <li class="dropdown-item">Dugeons&Dragons</li>
                        <li class="dropdown-item">Vampire 5e</li>
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
                case '.dropdown-item':
                    return items;
                default:
                    return place;
            }
        });
    });

    describe('[addDropdownClickEventListner]', () => {
        it('Should change a dropdown list style display from none to block', async () => {
            // eslint-disable-next-line no-unused-vars
            const dropdown = new DropdownComponent('#test');

            const resultDisplay = $('.dropdown-list');
            console.log(resultDisplay.attr('style'));

            resultDisplay.toggle();
            console.log(resultDisplay.attr('style'));

            console.log($('.dropdown-btn'));

            $('.dropdown-btn').trigger('click');
            console.log(resultDisplay.attr('style'));

            expect(resultDisplay.attr('style')).toEqual('display: block;');
        });

        it('Should change a dropdown list style display from block to none', async () => {
            // eslint-disable-next-line no-unused-vars
            const dropdown = new DropdownComponent('#test');

            const resultDisplay = $('.dropdown-list');

            $('.dropdown-btn').trigger('click');
            expect(resultDisplay.attr('style')).toEqual('display: none;');
        });
    });
});
