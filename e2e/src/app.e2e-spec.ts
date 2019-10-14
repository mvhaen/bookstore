import { AppPage } from './app.po';
import { browser, logging } from 'protractor';


describe('Bookstore', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getTitleText()).toEqual('Welcome to bookstore!');
  });

  it('should display the correct book title and author name', () => {
    expect(page.book('book-summary-item-1').getTitle()).toEqual('The Emperor\'s Blades');
    expect(page.book('book-summary-item-1').getAuthorName()).toEqual('Brian Stavely');
  });

  it('should display the correct data in the shopping cart after buying', () => {
    page.navigateTo();
    page.book('book-summary-item-1').click();
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getTitle()).toEqual('The Emperor\'s Blades');
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getAmount()).toEqual('1');
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getPrice()).toEqual('€18.90');
    page.book('book-summary-item-1').click();
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getTitle()).toEqual('The Emperor\'s Blades');
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getAmount()).toEqual('2');
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getPrice()).toEqual('€37.80');
    page.book('book-summary-item-2').click();
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getTitle()).toEqual('The Emperor\'s Blades');
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getAmount()).toEqual('2');
    expect(page.shoppingCartEntry('shopping-cart-entry-1').getPrice()).toEqual('€37.80');
    expect(page.shoppingCartEntry('shopping-cart-entry-2').getTitle()).toEqual('The Providence Of Fire');
    expect(page.shoppingCartEntry('shopping-cart-entry-2').getAmount()).toEqual('1');
    expect(page.shoppingCartEntry('shopping-cart-entry-2').getPrice()).toEqual('€18.90');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
