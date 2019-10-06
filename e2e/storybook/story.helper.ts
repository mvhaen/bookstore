import { browser } from 'protractor';

export abstract class StoryHelper {
  navigateToStory(story: string) {
    return browser.get(`http://localhost:6006/iframe.html?id=${story}`) as Promise<any>;
  }
}
