import { browser } from 'protractor';

export abstract class StoryHelper {
  navigateToStory(story: string) {
    return browser.get(`${browser.baseUrl}/iframe.html?id=${story}`) as Promise<any>;
  }
}
