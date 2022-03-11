import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';

import './style.scss';
import page from './index.html?raw';

export default function sum(a, b) {
    return a + b;
}

LayoutProviderService.inject(page)
    .then(() => {
        // Javascript Code initialization
        sum(1, 2);
        PasswordInputService.initFor('#eye_icon');
});