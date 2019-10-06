import { ShoppingCartEntryComponent } from './shopping-cart-entry.component';

import { EmperorsBladesShoppingCartItemMock } from '../mocks/EmperorsBladesShoppingCartItem.mock';
import { TheProvidenceOfFireShoppingCartItemMock } from '../mocks/TheProvidenceOfFireShoppingCartItem.mock';

export default {
  title: 'Shopping Cart Entry',
};

export const EmperorsBlades = () => ({
  component: ShoppingCartEntryComponent,
  props: {
    item: EmperorsBladesShoppingCartItemMock,
  }
});

export const TheProvidenceOfFire = () => ({
    component: ShoppingCartEntryComponent,
    props: {
      item: TheProvidenceOfFireShoppingCartItemMock,
    }
  });
