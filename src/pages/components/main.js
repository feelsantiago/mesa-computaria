import { LayoutProviderService } from '../../services/layout-provider.service';
import PasswordInput from '../../components/password.components';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page).then(() => {
    const password = new PasswordInput('#pswd');
});
