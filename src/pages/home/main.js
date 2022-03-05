import { LayoutProviderService } from '../../services/layout-provider.service';

import './style.scss';
import page from './index.html?raw';

function sum(a, b) {
    return a + b;
}

LayoutProviderService.inject(page);

export default sum;