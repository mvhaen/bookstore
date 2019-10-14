import { StoryHelper } from '../../../e2e/storybook/story.helper';
import { element, by, ElementFinder } from 'protractor';

export class ShoppingCartEntryHelper extends StoryHelper {
    constructor(private id?: string) {
        super();
    }

    get selector() {
        return 'app-shopping-cart-entry' + (this.id ? `#${this.id}` : '');
    }

    navigateToStory(story: string) {
        return super.navigateToStory(`shopping-cart-entry--${story}`);
    }

    getTitle() {
        return element(by.css(`${this.selector} .title`)).getText() as Promise<string>;
    }

    getAmount() {
        return element(by.css(`${this.selector} .amount`)).getText() as Promise<string>;
    }

    getPrice() {
        return element(by.css(`${this.selector} .total`)).getText() as Promise<string>;
    }
}
