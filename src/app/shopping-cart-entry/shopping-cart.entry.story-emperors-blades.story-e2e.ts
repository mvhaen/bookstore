import { ShoppingCartEntryHelper } from './shopping-cart-entry.helper';
import { browser, logging, ExpectedConditions } from 'protractor';

describe('book story', () => {
  let shoppingCartItem: ShoppingCartEntryHelper;

  beforeEach(async () => {
    shoppingCartItem = new ShoppingCartEntryHelper();
    await shoppingCartItem.navigateToStory('emperors-blades');
  });

  it('should display the correct data', async () => {
    expect(await shoppingCartItem.getTitle()).toEqual('The Emperor\'s Blades');
    expect(await shoppingCartItem.getAmount()).toEqual('2');
    expect(await shoppingCartItem.getPrice()).toEqual('€37.80');
  });

//   it('should display an alert when clicking the buy button', async () => {
//     await shoppingCartItem.click();
//     browser.wait(ExpectedConditions.alertIsPresent(), 5000);
//     const alert = await browser.switchTo().alert();
//     expect(alert.getText()).toEqual('you clicked Emperor\'s Blades');
//     await alert.dismiss();
//   });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
