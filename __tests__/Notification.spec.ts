import Notification from '../src/Notification';

describe('Notification', () => {
  it('can create the object', () => {
    const nf = new Notification();
    expect(Object.keys(nf.templateConf).length).toBe(3);
    expect(Object.keys(nf.templateConf.A2).length).toBe(2);
  });
  it('can prepare the template', () => {
    const nf = new Notification();
    nf.prepare('Z2');
    expect(nf.subject).toBeUndefined();
    expect(nf.template).toBeUndefined();
    nf.prepare('A2');
    expect(nf.subject).toBe('Email title');
    expect(nf.template.split('\n').length).toBe(4);
  });
  it('can compile the template', () => {
    const nf = new Notification();
    nf.prepare('A2');
    nf.compile({ A1: 'freddie' });
    expect(nf.body.split('\n').length).toBe(4);
  });
  it('can send a email', () => {
    const nf = new Notification();
    nf.prepare('A2');
    nf.compile({ A1: 'freddie' });
    nf.email('to@domain.com');
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
DocumentApp.openById = jest.fn(() => ({
  getBody: jest.fn(() => ({
    getText: jest.fn(() => [
      'body line 1:{%A1 %}',
      'body line 2:{% B1  %}',
      'body line 3:{% B1%}',
      'body line 4:{%C1%}'].join('\n')),
  })),
  getName: jest.fn(() => 'Email title'),
})) as any;
