import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';
import TextInput from '../../components/text-input.components';
import EmailTextInput from '../../components/text-input-email.components';

import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';


LayoutProviderService.inject(page).then(() => {
    // eslint-disable-next-line no-unused-vars
    const dropdownGameType = new DropdownComponent('#games');
    PasswordInputService.initFor('#password');
    // javascript text-input-box initialization
    const validateTextInput = new TextInput('.container-text-input-box');
    validateTextInput.isTextValid();
    const validateEmailInput = new EmailTextInput('.container-text-input-box');
    validateEmailInput.isTextValid();
});
