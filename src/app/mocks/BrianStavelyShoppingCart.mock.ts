import { IShoppingCartModel } from '../models/IShoppingCartModel';

import { EmperorsBladesShoppingCartItemMock } from './EmperorsBladesShoppingCartItem.mock';
import { TheProvidenceOfFireShoppingCartItemMock } from './TheProvidenceOfFireShoppingCartItem.mock';

export const BrianStavelyShoppingCart: IShoppingCartModel = {
    total: 56.7,
    items: [
        EmperorsBladesShoppingCartItemMock,
        TheProvidenceOfFireShoppingCartItemMock
    ]
};
