class SpreadSheet {
  private sheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  /**
   * constructor
   * @param id:string? sheet ID
   * @param name:string? sheet Name
   */
  public constructor(id: string?, name:string?) {
    if (id && name) {
      this.sheet = SpreadsheetApp.openById(id).getSheetByName(name);
    } else {
      this.sheet = SpreadsheetApp.getActiveSheet();
    }
  }

  /**
   * lastRow
   */
  public lastRow(): {[key: string]: any} {
    const range = this.sheet.getDataRange();
    const values = range.getValues();
    const headers = values.shift();
    const lastValues = values[range.getLastRow() - 2];
    const ret = {};
    headers.forEach((header, i) => {
      ret[String(header)] = lastValues[i];
    });
    return ret;
  }
}

export default SpreadSheet;
