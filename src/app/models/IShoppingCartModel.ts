import { IShoppingCartItemModel } from './IShoppingCartItemModel';

export interface IShoppingCartModel {
    total: number;
    items: IShoppingCartItemModel[];
}
