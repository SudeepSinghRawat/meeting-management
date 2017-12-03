import { MeetingManagementPage } from './app.po';

describe('meeting-management App', () => {
  let page: MeetingManagementPage;

  beforeEach(() => {
    page = new MeetingManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
