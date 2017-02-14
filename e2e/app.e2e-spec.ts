import { AttendanceAppDemoPage } from './app.po';

describe('attendance-app-demo App', function() {
  let page: AttendanceAppDemoPage;

  beforeEach(() => {
    page = new AttendanceAppDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
