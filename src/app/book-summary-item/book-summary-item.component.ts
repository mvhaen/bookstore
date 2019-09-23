import { Component, OnInit, Input } from '@angular/core';
import { IBookModel } from '../models/IBookModel';

@Component({
  selector: 'app-book-summary-item',
  templateUrl: './book-summary-item.component.html',
  styleUrls: ['./book-summary-item.component.scss']
})
export class BookSummaryItemComponent implements OnInit {
  @Input() book: IBookModel;

  constructor() { }

  ngOnInit() {
  }

}
