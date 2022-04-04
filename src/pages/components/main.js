import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';
import Input  from '../../components/text-input.components';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    // Javascript Code initialization
    PasswordInputService.initFor('#password');
    //javascript text-input-box initialization
    const ValidateTextInput = new Input('#input-text-box');
});

