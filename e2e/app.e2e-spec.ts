import { FormationAngular2Page } from './app.po';

describe('formation-angular2 App', function() {
  let page: FormationAngular2Page;

  beforeEach(() => {
    page = new FormationAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
