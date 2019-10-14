import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShoppingCartModel } from '../models/IShoppingCartModel';
import { IShoppingCartItemModel } from '../models/IShoppingCartItemModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart: IShoppingCartModel;
  @Output() increment: EventEmitter<IShoppingCartItemModel> = new EventEmitter();
  @Output() decrement: EventEmitter<IShoppingCartItemModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIncrement(item: IShoppingCartItemModel) {
    console.log('onIncrement', item);
    this.increment.emit(item);
  }

  onDecrement(item: IShoppingCartItemModel) {
    this.decrement.emit(item);
  }
}
