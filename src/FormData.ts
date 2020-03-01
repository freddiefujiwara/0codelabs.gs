class FormData {
  private sheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  public target: {[k:string]:string};

  public targetRow: integer;

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
    this.getTarget();
  }

  /**
   * getTarget
   */
  public getTarget(): {[key: string]: any} {
    const range = this.sheet.getDataRange();
    const values = range.getValues();
    const headers = values.shift();
    this.targetRow = range.getLastRow();
    const targetValues = values[this.targetRow - 2];
    const ret = {};
    headers.forEach((header, i) => {
      ret[String(header)] = targetValues[i];
    });
    this.target = ret;
  }

  /**
   * suspend
   */
  public suspend() {
    this.sheet.getRange(this.targetRow, 1).setBackground('red');
  }

  /**
   * reject
   */
  public reject() {
    this.sheet.getRange(this.targetRow, 1).setBackground('gray');
  }

  /**
   * accept
   */
  public accept() {
    this.sheet.getRange(this.targetRow, 1).setBackground('white');
  }
}

export default FormData;
