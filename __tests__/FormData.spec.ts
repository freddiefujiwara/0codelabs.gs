import FormData from '../src/FormData';

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
})) as any;

describe('FormData', () => {
  it('can be transpiled as ret', () => {
    const spreadSheetWithId = new FormData('ssid', 'ssName');
    let ret = spreadSheetWithId.last();
    expect(ret.A1).toBe('A3');
    expect(ret.B1).toBe('B3');
    const spreadSheetWithoutId = new FormData();
    ret = spreadSheetWithoutId.last();
    expect(ret.A1).toBe('A4');
    expect(ret.B1).toBe('B4');
    expect(ret.C1).toBe('C4');
  });
});
