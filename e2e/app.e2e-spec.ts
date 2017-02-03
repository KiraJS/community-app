import { CommunityAppPage } from './app.po';

describe('community-app App', function() {
  let page: CommunityAppPage;

  beforeEach(() => {
    page = new CommunityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
