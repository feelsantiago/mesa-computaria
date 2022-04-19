import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password.components';
import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    // eslint-disable-next-line no-unused-vars
    const password = new PasswordInput('#password');
    // eslint-disable-next-line no-unused-vars
    const dropdownGameType = new DropdownComponent('#games', 'Game Type');
});
