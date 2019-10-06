import { Component, OnInit, Input } from '@angular/core';
import { IShoppingCartModel } from '../models/IShoppingCartModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() cart: IShoppingCartModel;

  constructor() { }

  ngOnInit() {
  }

}
