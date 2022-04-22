import { LayoutProviderService } from '../../services/layout-provider.service';
import TextInput from '../../components/text-input.components';
import EmailTextInput from '../../components/text-input-email.components';
import PasswordInput from '../../components/password.components';

import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    // javascript text-input-box initialization
    // eslint-disable-next-line no-unused-vars
    const validateTextInput = new TextInput('.container-text-input-box');
    // eslint-disable-next-line no-unused-vars
    const validateEmailInput = new EmailTextInput('.container-text-input-box');
    // eslint-disable-next-line no-unused-vars
    const password = new PasswordInput('#password');
    password.disabled;
    // eslint-disable-next-line no-unused-vars
    const dropdownGameType = new DropdownComponent('#games', 'Game Type');
});
