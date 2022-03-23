import { LayoutProviderService } from '../../services/layout-provider.service';

import DropdownComponent from '../../components/dropdown.component';

import './style.scss';
import page from './index.html?raw';

export default function sum(a, b) {
    return a + b;
}

LayoutProviderService.inject(page).then(() => {
    // Javascript Code initialization
    sum(1, 2);

    // eslint-disable-next-line no-unused-vars
    const dropdown = new DropdownComponent('#game');
});
