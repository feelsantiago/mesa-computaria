import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password.components';
import CheckboxComponent from '../../components/checkbox.component';
import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

export function instantiatePassword(stringID) {
    const password = new PasswordInput(stringID);
    password.enable();
}

export function instantiateCheckbox(stringID, stringLabel) {
    const checkbox = CheckboxComponent(stringID, stringLabel);
    checkbox.enable();
}

export function instantiateDropdown(stringID, stringPlaceholder) {
    const dropdown = DropdownComponent(stringID, stringPlaceholder);
    dropdown.enable();
}

LayoutProviderService.inject(page, () => {
    instantiatePassword('#password');
    instantiateCheckbox('#remeber', 'lembre-se');
    instantiateDropdown('#games', 'Game Type');
});
