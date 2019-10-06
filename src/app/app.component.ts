import { Component } from '@angular/core';
import { IBookModel } from './models/IBookModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';
  book: IBookModel = {
    id: '1',
    title: 'The Emperor\'s Blades',
    author: {
      id: '1',
      name: 'Brian Stavely'
    },
    cover: 'https://images-na.ssl-images-amazon.com/images/I/517dR9S8T4L.jpg',
    price: 18.90
  };
}
