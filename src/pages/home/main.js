import { LayoutProviderService } from '../../services/layout-provider.service';

import './style.scss';
import page from './index.html?raw';

LayoutProviderService.inject(page);
