import Notification from '../src/Notification';

describe('Notification', () => {
  it('can create the object', () => {
    const nf = new Notification();
    expect(Object.keys(nf.templateConf).length).toBe(3);
    expect(Object.keys(nf.templateConf.A2).length).toBe(2);
  });
  it('can send a email', () => {
    Notification.email('to@domain.com', 'subject', 'body');
  });
});

// GAS Mock
GmailApp.sendEmail = jest.fn(() => ({
})) as any;
SpreadsheetApp.getActiveSheet = jest.fn(() => ({
  getDataRange: jest.fn(() => ({
    getValues: jest.fn(() => [
      ['id', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3'],
      ['A4', 'B4', 'C4'],
    ]),
    getLastRow: jest.fn(() => 4),
  })),
})) as any;
