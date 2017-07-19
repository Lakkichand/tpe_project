import { TPEAngularProjectPage } from './app.po';

describe('tpeangular-project App', function() {
  let page: TPEAngularProjectPage;

  beforeEach(() => {
    page = new TPEAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
