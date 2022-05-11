import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password.component';
import CheckboxComponent from '../../components/checkbox.component';
import TextInput from '../../components/text-input.components';
import EmailTextInput from '../../components/text-input-email.components';
import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';
import DateInput from '../../components/date.component';

export function instantiateTextInput(stringText) {
    const textInput = new TextInput(stringText);
    return textInput;
}

export function instantiateInputEmail(stringEmail) {
    const textEmail = new EmailTextInput(stringEmail);
    return textEmail;
}

export function instantiatePassword(stringID) {
    const password = new PasswordInput(stringID);
    return password;
}

export function instantiateCheckbox(stringID, stringLabel) {
    const checkbox = new CheckboxComponent(stringID, stringLabel);
    return checkbox;
}

export function instantiateDropdown(stringID, stringPlaceholder) {
    const dropdown = new DropdownComponent(stringID, stringPlaceholder);
    return dropdown;
}

export function instantiateDateInput(stringID) {
    const date = new DateInput(stringID);
    return date;
}

LayoutProviderService.inject(page, () => {
    instantiateDateInput('#date');
    instantiatePassword('#password');
    instantiateCheckbox('#remember', 'lembre-se');
    instantiateDropdown('#games', 'Game Type');
    instantiateTextInput('#input-text');
    instantiateInputEmail('#input-text');
});
