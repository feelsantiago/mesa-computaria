import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password.components';
import CheckboxComponent from '../../components/checkbox.component';
import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    const password = new PasswordInput('#password');
    password.enable();

    const checkboxRememberMe = new CheckboxComponent('#remeber', 'lembre-se');
    checkboxRememberMe.enable();

    const dropdownGameType = new DropdownComponent('#games', 'Game Type');
    dropdownGameType.enable();
});
