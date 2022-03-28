import { LayoutProviderService } from '../../services/layout-provider.service';
import { PasswordInputService } from '../../services/password-input.service';

import './style.scss';
import page from './index.html?raw';
import { TestEnvironmentError } from '../../utils/errors';

LayoutProviderService.inject(page)
    .then(() => {
        // Javascript Code initialization
        PasswordInputService.initFor('#password');
    })
    .catch((error) => {
        if (!(error instanceof TestEnvironmentError)) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    });
