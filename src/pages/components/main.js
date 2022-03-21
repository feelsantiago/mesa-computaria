import { LayoutProviderService } from '../../services/layout-provider.service';

import { DropdownService } from '../../services/dropdown.service';

import './style.scss';
import page from './index.html?raw';

export default function sum(a, b) {
    return a + b;
}

LayoutProviderService.inject(page).then(() => {
    // Javascript Code initialization
    sum(1, 2);

    DropdownService.toggleList();
    DropdownService.itemSelect();
});
