import { ShoppingCartComponent } from './shopping-cart.component';

import { BrianStavelyShoppingCart } from '../mocks/BrianStavelyShoppingCart.mock';
import { ShoppingCartEntryComponent } from '../shopping-cart-entry/shopping-cart-entry.component';

export default {
  title: 'Shopping Cart',
};

export const CollectingBrianStavely = () => ({
  moduleMetadata: { declarations: [ShoppingCartEntryComponent] },
  component: ShoppingCartComponent,
  props: {
    cart: BrianStavelyShoppingCart
  }
});

