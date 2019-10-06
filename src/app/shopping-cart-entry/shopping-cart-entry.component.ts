import { Component, OnInit, Input } from '@angular/core';
import { IShoppingCartItemModel } from '../models/IShoppingCartItemModel';

@Component({
  selector: 'app-shopping-cart-entry',
  templateUrl: './shopping-cart-entry.component.html',
  styleUrls: ['./shopping-cart-entry.component.scss']
})
export class ShoppingCartEntryComponent implements OnInit {
  @Input() item: IShoppingCartItemModel;

  constructor() { }

  ngOnInit() {
  }

}
