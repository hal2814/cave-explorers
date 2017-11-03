import { AdventurePage } from './app.po';

describe('adventure App', () => {
  let page: AdventurePage;

  beforeEach(() => {
    page = new AdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
