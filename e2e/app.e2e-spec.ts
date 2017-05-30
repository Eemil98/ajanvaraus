import { AjanvarausPage } from './app.po';

describe('ajanvaraus App', () => {
  let page: AjanvarausPage;

  beforeEach(() => {
    page = new AjanvarausPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
