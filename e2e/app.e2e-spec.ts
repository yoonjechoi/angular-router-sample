import { AngularRouterSamplePage } from './app.po';

describe('angular-router-sample App', function() {
  let page: AngularRouterSamplePage;

  beforeEach(() => {
    page = new AngularRouterSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
