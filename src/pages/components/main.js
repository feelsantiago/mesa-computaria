import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password-input.components';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    const PasswordInputComponents = new PasswordInput('#password');
});
