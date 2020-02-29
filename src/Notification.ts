class Notification {
public templateConf: { [s: string]: {[key:string] }};

/**
   * constructor
   * @param id:string? sheet ID
   * @param name:string? sheet Name
   */
public constructor(templateConfSheetId: string?, templateConfSheetName:string?) {
  let sheet;
  if (templateConfSheetId && templateConfSheetName) {
    sheet = SpreadsheetApp.openById(templateConfSheetId).getSheetByName(templateConfSheetName);
  } else {
    sheet = SpreadsheetApp.getActiveSheet();
  }
  const templateConfs = sheet.getDataRange().getValues();
  const headers = templateConfs.shift();
  this.templateConf = {};
  templateConfs.forEach((templateConf) => {
    const row = {};
    let id;
    headers.forEach((header, h) => {
      if (String(header) === 'id') {
        id = templateConf[h];
        return;
      }
      row[String(header)] = templateConf[h];
    });
    this.templateConf[id] = row;
  });
}

/**
   * event
   * @param title:string? event title
   * @param title:string? event title
   */
public static email(to:string, subject:string, body:string, option?:any) {
  GmailApp.sendEmail(to, subject, body, option);
}
}

export default Notification;
