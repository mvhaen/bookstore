import { browser, by, element } from 'protractor';
import { BookSummaryItemHelper } from '../../src/app/book-summary-item/book-summary-item.helper';
import { ShoppingCartEntryHelper } from '../../src/app/shopping-cart-entry/shopping-cart-entry.helper';

export class AppPage {
    books = {
        'book-summary-item-1': new BookSummaryItemHelper('book-summary-item-1'),
        'book-summary-item-2': new BookSummaryItemHelper('book-summary-item-2')
    };

    shoppingCartEntries = {
        'shopping-cart-entry-1': new ShoppingCartEntryHelper('shopping-cart-entry-1'),
        'shopping-cart-entry-2': new ShoppingCartEntryHelper('shopping-cart-entry-2')
    };

    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    book(id: string) {
        return this.books[id];
    }

    shoppingCartEntry(id: string) {
        return this.shoppingCartEntries[id];
    }
}
