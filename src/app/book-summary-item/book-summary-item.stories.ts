import { BookSummaryItemComponent } from './book-summary-item.component';

export default {
  title: 'Book Summary Item',
};


export const title = () => ({
  component: BookSummaryItemComponent,
  props: {
    book: {
      id: '1',
      title: 'The Emperor\'s Blades',
      author: {
        id: '1',
        name: 'Brian Stavely'
      },
      cover: 'https://images-na.ssl-images-amazon.com/images/I/517dR9S8T4L.jpg',
    }
  },
});
