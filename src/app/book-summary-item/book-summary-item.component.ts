import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBookModel } from '../models/IBookModel';

@Component({
  selector: 'app-book-summary-item',
  templateUrl: './book-summary-item.component.html',
  styleUrls: ['./book-summary-item.component.scss']
})
export class BookSummaryItemComponent implements OnInit {
  @Input() book: IBookModel;
  @Output() buy: EventEmitter<IBookModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onBuy() {
    console.log('onBuy', this.book);
    this.buy.emit(this.book);
  }
}
