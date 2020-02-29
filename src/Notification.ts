class Notification {
    public templateConf: { [s: string]: {[key:string] }};

    public subject:string;

    public template:string;

    /**
    * constructor
    * @param templateConfSheetId:string? SpreadSheet ID
    * @param templateConfSheetName:string? SpreadSheet Name
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
    * prepare
    * @param id:string
    */
    public prepare(id:string) {
      if (!(id in this.templateConf)) {
        return;
      }
      const doc = DocumentApp.openById(id);
      this.subject = doc.getName();
      this.template = doc.getBody().getText();
    }

    /**
    * email
    * @param to:string      email to
    * @param subject:string email subject
    * @param body:string    email body
    * @param option?:any
    */
    public static email(to:string, subject:string, body:string, option?:any) {
      GmailApp.sendEmail(to, subject, body, option);
    }
}

export default Notification;
