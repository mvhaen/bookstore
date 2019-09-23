import { browser, by, element } from 'protractor';
import { BookSummaryItemHelper } from '../../src/app/book-summary-item/book-summary-item.helper';

export class AppPage {
  bookSummaryItem = new BookSummaryItemHelper();

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getBookTitle() {
   return this.bookSummaryItem.getTitle() as Promise<string>;
  }

  getAuthorName() {
    return this.bookSummaryItem.getAuthorName() as Promise<string>;
   }
 
}
