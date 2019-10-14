import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBookModel } from '../models/IBookModel';

@Component({
  selector: 'app-book-gallery',
  templateUrl: './book-gallery.component.html',
  styleUrls: ['./book-gallery.component.scss']
})
export class BookGalleryComponent implements OnInit {
  @Input() books: IBookModel[];
  @Output() buy: EventEmitter<IBookModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBuy(book: IBookModel) {
    console.log('onBuy++', book);
    this.buy.emit(book);
  }

}
