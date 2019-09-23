import { BookSummaryItemHelper } from './book-summary-item.helper';
import { browser, logging } from 'protractor';

describe('book story', () => {
  let bookSummaryItem: BookSummaryItemHelper;

  beforeEach(() => {
    bookSummaryItem = new BookSummaryItemHelper();
  });

  it('should display the correct title', () => {
    bookSummaryItem.navigateToStory('title');
    expect(bookSummaryItem.getTitle()).toEqual('The Emperor\'s Blades');
  });

  it('should display the correct author', () => {
    bookSummaryItem.navigateToStory('title');
    expect(bookSummaryItem.getAuthorName()).toEqual('Brian Stavely');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
