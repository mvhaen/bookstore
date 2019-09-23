import { AppPage } from './app.po';
import { browser, logging } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to bookstore!');
  });

  it('should display the correct book title', () => {
    page.navigateTo();
    expect(page.getBookTitle()).toEqual('The Emperor\'s Blades');
  });

  it('should display the correct author', () => {
    page.navigateTo();
    expect(page.getAuthorName()).toEqual('Brian Stavely');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
