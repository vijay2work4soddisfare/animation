import { TodayTest00231216Page } from './app.po';

describe('today-test00231216 App', function() {
  let page: TodayTest00231216Page;

  beforeEach(() => {
    page = new TodayTest00231216Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
