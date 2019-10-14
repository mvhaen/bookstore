import { createAction, props } from '@ngrx/store';
import { IBookModel } from '../models/IBookModel';
import { IShoppingCartItemModel } from '../models/IShoppingCartItemModel';

export const buy = createAction('[Shopping Cart] Buy', props<{ book: IBookModel }>());
export const decrement = createAction('[Shopping Cart] Decrement', props<{ item: IShoppingCartItemModel }>());
export const increment = createAction('[Shopping Cart] Increment', props<{ item: IShoppingCartItemModel }>());
export const empty = createAction('[Shopping Cart] Empty');

