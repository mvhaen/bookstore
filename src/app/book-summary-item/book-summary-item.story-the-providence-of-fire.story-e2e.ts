import { BookSummaryItemHelper } from './book-summary-item.helper';
import { browser, logging, ExpectedConditions } from 'protractor';

describe('book story', () => {
  let bookSummaryItem: BookSummaryItemHelper;

  beforeEach(async () => {
    bookSummaryItem = new BookSummaryItemHelper();
    await bookSummaryItem.navigateToStory('the-providence-of-fire');
  });

  it('should display the correct data', async () => {
    expect(await bookSummaryItem.getTitle()).toEqual('The Providence Of Fire');
    expect(await bookSummaryItem.getAuthorName()).toEqual('Brian Stavely');
    expect(await bookSummaryItem.getPrice()).toEqual('€ 18.9');
  });

  it('should display an alert when clicking the buy button', async () => {
    await bookSummaryItem.click();
    browser.wait(ExpectedConditions.alertIsPresent(), 5000);
    const alert = await browser.switchTo().alert();
    expect(alert.getText()).toEqual('you clicked The Providence Of Fire');
    await alert.dismiss();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
