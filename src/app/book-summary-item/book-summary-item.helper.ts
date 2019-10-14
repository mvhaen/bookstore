import { StoryHelper } from '../../../e2e/storybook/story.helper';
import { element, by, ElementFinder } from 'protractor';

export class BookSummaryItemHelper extends StoryHelper {
  constructor(private id?: string) {
    super();
  }

  get selector() {
    return 'app-book-summary-item' + (this.id ? `#${this.id}` : '');
  }

  navigateToStory(story: string) {
    return super.navigateToStory(`book-summary-item--${story}`);
  }

  getTitle() {
    return element(by.css(`${this.selector} .title`)).getText() as Promise<string>;
  }

  getAuthorName() {
    return element(by.css(`${this.selector} .author`)).getText() as Promise<string>;
  }

  getPrice() {
    return element(by.css(`${this.selector} .price`)).getText() as Promise<string>;
  }

  click() {
    return element(by.css(`${this.selector} button`)).click();
  }
}
