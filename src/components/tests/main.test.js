import { beforeEach, afterEach, describe, it } from 'vitest';
import $ from 'jquery';
import { instanciatePassword, instanciateCheckbox, instanciateDropdown } from '../../pages/components/main';

describe('[main]', () => {
    beforeEach(() => {
        const html = $.parseHTML(`
        <div id="passowrdTest">
            <div>
                <input id="input-password" type="password">
                <i id="icon" class="fa-solid fa-eye-slash"></i>
            </div>
        </div>

        <div class="row-checkbox" id="checkboxTest">
            <fieldset class="checkbox-container container">
                <input type="checkbox" class="checkbox" />
                <p class="checkbox-label"></p>
            </fieldset>
        </div>
        
        <div class="row-dropdown-input" id="dropdownTest">
            <fieldset class="dropdown-container container">
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
    });

    afterEach(() => {
        $('#passowrdTest').remove();
        $('#checkboxTest').remove();
        $('#dropdownTest').remove();
    });

    describe('[instanciation]', () => {
        it('Should instanciate a new objects', async () => {
            console.log(instanciatePassword('#passowrdTest'));
            console.log(instanciateCheckbox('#checkboxTest'));
            console.log(instanciateDropdown('#dropdownTest'));
        });
    });
});
