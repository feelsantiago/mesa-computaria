import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password.components';
import CheckboxComponent from '../../components/checkbox.component';
import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    const dropdownGameType = new DropdownComponent('#games', 'Game Type');
    dropdownGameType.enable();

    const checkboxRememberMe = new CheckboxComponent('#remeber', 'lembre-se');
    checkboxRememberMe.enable();

    // eslint-disable-next-line no-unused-vars
    const password = new PasswordInput('#password');
});
