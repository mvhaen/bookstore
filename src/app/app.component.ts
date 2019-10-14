import { Component } from '@angular/core';
import { IBookModel } from './models/IBookModel';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { buy, increment, decrement, empty } from './reducers/shoppingcart.actions';
import { IShoppingCartModel } from './models/IShoppingCartModel';
import { IShoppingCartItemModel} from './models/IShoppingCartItemModel';

import { BooksMock } from './mocks/Books.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';
  books = BooksMock;

  cart$: Observable<IShoppingCartModel>;
  cart = null;

  constructor(private store: Store<{ count: number }>) {
    this.cart$ = store.pipe(select('shoppingCart'));
    this.cart$.subscribe(cart => this.cart = cart);
  }

  buy(book: IBookModel) {
    console.log('buy', book);
    this.store.dispatch(buy({ book }));
  }

  increment(item: IShoppingCartItemModel) {
    console.log('increment', item);
    this.store.dispatch(increment({item}));
  }

  decrement(item: IShoppingCartItemModel) {
    this.store.dispatch(decrement({item}));
  }

  empty() {
    this.store.dispatch(empty());
  }
}
