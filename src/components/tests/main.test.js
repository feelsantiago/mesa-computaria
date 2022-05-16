import { beforeEach, afterEach, describe, it, expect } from 'vitest';
import $ from 'jquery';
import { instantiatePassword, instantiateCheckbox, instantiateDropdown } from '../../pages/components/main';

describe('[main]', () => {
    beforeEach(() => {
        const html = $.parseHTML(`
        <div id="passwordTest">
            <div>
                <input id="input-password" type="password">
                <i id="icon" class="fa-solid fa-eye-slash"></i>
            </div>
        </div>

        <div class="row-checkbox" id="checkboxTest">
            <fieldset class="checkbox-container component">
                <input type="checkbox" class="checkbox" />
                <p class="checkbox-label"></p>
            </fieldset>
        </div>
        
        <div class="row-dropdown-input" id="dropdownTest">
            <fieldset class="dropdown-container component">
            <button type="button" class="dropdown dropdown-btn" id="btn"></button>
                <div class="dropdown dropdown-list" id="list" style="display: block;">
                    <ul>
                        <li class="dropdown-item selected" id="selected">Select one</li>
                        <li class="dropdown-item" id="dnd">Dungeons&Dragons</li>
                        <li class="dropdown-item" id="vampire">Vampire 5e</li>
                    </ul>
                </div>
            </fieldset>
        </div>`);

        $(document.body).append(html);
    });

    afterEach(() => {
        $('#passwordTest').remove();
        $('#checkboxTest').remove();
        $('#dropdownTest').remove();
    });

    describe('[instantiation]', () => {
        it('Should instantiate a new objects', async () => {
            const password = instantiatePassword('#passwordTest');
            const checkbox = instantiateCheckbox('#checkboxTest', 'remember');
            const dropdown = instantiateDropdown('#dropdownTest', 'Game Type');

            expect(password.required).toBeTruthy();
            expect(password.valid).toBeFalsy();
            expect(password.disabled).toBeFalsy();

            expect(checkbox.required).toBeTruthy();
            expect(checkbox.valid).toBeFalsy();
            expect(checkbox.disabled).toBeFalsy();

            expect(dropdown.required).toBeTruthy();
            expect(dropdown.valid).toBeFalsy();
            expect(dropdown.disabled).toBeFalsy();
        });
    });
});
