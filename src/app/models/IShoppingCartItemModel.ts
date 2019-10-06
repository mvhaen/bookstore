import { IBookModel } from './IBookModel';

export interface IShoppingCartItemModel {
    book: IBookModel;
    amount: number;
    total: number;
}
