import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';

import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    // eslint-disable-next-line no-unused-vars
    const dropdownGameType = new DropdownComponent('#games', 'Game Type');
    PasswordInputService.initFor('#password');
});
