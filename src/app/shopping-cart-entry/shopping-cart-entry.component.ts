import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IShoppingCartItemModel } from '../models/IShoppingCartItemModel';

@Component({
  selector: 'app-shopping-cart-entry',
  templateUrl: './shopping-cart-entry.component.html',
  styleUrls: ['./shopping-cart-entry.component.scss']
})
export class ShoppingCartEntryComponent implements OnInit {
  @Input() item: IShoppingCartItemModel;
  @Output() increment: EventEmitter<IShoppingCartItemModel> = new EventEmitter();
  @Output() decrement: EventEmitter<IShoppingCartItemModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIncrement() {
    console.log('onIncrement');
    this.increment.emit(this.item);
  }

  onDecrement() {
    this.decrement.emit(this.item);
  }

}
