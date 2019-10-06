import { StoryHelper } from '../../../e2e/storybook/story.helper';
import { element, by, ElementFinder } from 'protractor';

export class BookSummaryItemHelper extends StoryHelper {
  navigateToStory(story: string) {
    return super.navigateToStory(`book-summary-item--${story}`);
  }

  getTitle() {
    return element(by.css('app-book-summary-item .title')).getText() as Promise<string>;
  }

  getAuthorName() {
    return element(by.css('app-book-summary-item .author')).getText() as Promise<string>;
  }

  getPrice() {
    return element(by.css('app-book-summary-item .price')).getText() as Promise<string>;
  }

  click() {
    return element(by.css('app-book-summary-item button')).click();
  }

}
