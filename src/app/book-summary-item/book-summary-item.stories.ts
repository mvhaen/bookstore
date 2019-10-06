import { action } from '@storybook/addon-actions';

import { BookSummaryItemComponent } from './book-summary-item.component';
import { EmperorsBladesMock } from '../mocks/EmperorsBlades.mock';
import { TheProvidenceOfFireMock } from '../mocks/TheProvidenceOfFire.mock';

export default {
  title: 'Book Summary Item',
};

export const EmperorsBlades = () => ({
  component: BookSummaryItemComponent,
  props: {
    book: EmperorsBladesMock,
    buy: () => alert('you clicked Emperor\'s Blades'),
  }
});

export const TheProvidenceOfFire = () => ({
  component: BookSummaryItemComponent,
  props: {
    book: TheProvidenceOfFireMock,
    buy: () => alert('you clicked The Providence Of Fire'),
  }
});
