import { LayoutProviderService } from '../../services/layout-provider.service';
import './style.scss';

function sum(a, b) {
    return a + b;
}

LayoutProviderService.inject('home').then(() => {
    sum(1, 2);
});

export default sum;