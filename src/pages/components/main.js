import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page)
    .then(() => {
        // Javascript Code initialization
        PasswordInputService.initFor('#password');
});