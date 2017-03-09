import { PhetogogroupAngular2Page } from './app.po';

describe('phetogogroup-angular2 App', function() {
  let page: PhetogogroupAngular2Page;

  beforeEach(() => {
    page = new PhetogogroupAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
