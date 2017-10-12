import { FbfUiPage } from './app.po';

describe('fbf-ui App', () => {
  let page: FbfUiPage;

  beforeEach(() => {
    page = new FbfUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
