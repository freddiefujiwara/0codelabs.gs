class Notification {
  /**
   * event
   * @param title:string? event title
   * @param title:string? event title
   */
  public static email(to:string, subject:string, body:string, option?:any) {
    GmailApp.sendEmail(to,subject,body,option);
  }
}

export default Notification;
