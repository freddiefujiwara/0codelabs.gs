import Notification from '../src/Notification';

// GAS Mock
GmailApp.sendEmail = jest.fn(() => ({
})) as any;

describe('Notification', () => {
  it('can send a email', () => {
    Notification.email('to@domain.com', 'subject', 'body');
  });
});
