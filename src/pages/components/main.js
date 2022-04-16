import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';
import CheckboxComponent from '../../components/checkbox.component';
import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    const dropdownGameType = new DropdownComponent('#games', 'Game Type');
    dropdownGameType.enable();

    const checkboxRememberMe = new CheckboxComponent('#remeberMe', 'lembre-se');
    checkboxRememberMe.enable();

    PasswordInputService.initFor('#password');
});
