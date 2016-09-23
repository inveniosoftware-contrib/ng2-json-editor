import { Ng2JsonEditorPage } from './app.po';

describe('ng2-json-editor App', function() {
  let page: Ng2JsonEditorPage;

  beforeEach(() => {
    page = new Ng2JsonEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
