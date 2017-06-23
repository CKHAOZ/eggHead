import { EggHeadPage } from './app.po';

describe('egg-head App', function() {
  let page: EggHeadPage;

  beforeEach(() => {
    page = new EggHeadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
