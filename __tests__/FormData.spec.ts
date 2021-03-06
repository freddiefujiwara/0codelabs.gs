import FormData from '../src/FormData';

describe('FormData', () => {
  it('can be transpiled as ret', () => {
    const spreadSheetWithId = new FormData('ssid', 'ssName');
    let ret = spreadSheetWithId.getTarget();
    expect(ret.A1).toBe('A3');
    expect(ret.B1).toBe('B3');
    const spreadSheetWithoutId = new FormData();
    ret = spreadSheetWithoutId.getTarget();
    expect(ret.A1).toBe('A4');
    expect(ret.B1).toBe('B4');
    expect(ret.C1).toBe('C4');
    ret = spreadSheetWithoutId.getTarget(2);
    expect(ret.A1).toBe('A2');
    expect(ret.B1).toBe('B2');
    expect(ret.C1).toBe('C2');
  });
  it('can suspend,reject and accept', () => {
    const spreadSheetWithoutId = new FormData();
    spreadSheetWithoutId.suspend();
    spreadSheetWithoutId.reject();
    spreadSheetWithoutId.accept();
  });
});

// GAS Mock
SpreadsheetApp.openById = jest.fn(() => ({
  getSheetByName: jest.fn(() => ({
    getDataRange: jest.fn(() => ({
      getValues: jest.fn(() => [
        ['A1', 'B1'],
        ['A2', 'B2'],
        ['A3', 'B3'],
      ]),
      getLastRow: jest.fn(() => 3),
    })),
  })),
})) as any;
SpreadsheetApp.getActiveSheet = jest.fn(() => ({
  getDataRange: jest.fn(() => ({
    getValues: jest.fn(() => [
      ['A1', 'B1', 'C1'],
      ['A2', 'B2', 'C2'],
      ['A3', 'B3', 'C3'],
      ['A4', 'B4', 'C4'],
    ]),
    getLastRow: jest.fn(() => 4),
  })),
  getRange: jest.fn(() => ({
    setBackground: jest.fn(() => {}),
  })),
})) as any;
