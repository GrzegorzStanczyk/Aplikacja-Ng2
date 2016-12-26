import { FrontEndDevBootcampW5Page } from './app.po';

describe('front-end-dev-bootcamp-w5 App', function() {
  let page: FrontEndDevBootcampW5Page;

  beforeEach(() => {
    page = new FrontEndDevBootcampW5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
