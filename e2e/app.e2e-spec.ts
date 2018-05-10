import { ReflectPage } from './app.po';

describe('reflect App', function() {
  let page: ReflectPage;

  beforeEach(() => {
    page = new ReflectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
