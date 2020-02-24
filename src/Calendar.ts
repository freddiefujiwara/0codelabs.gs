class Calendar {
  private calendar: GoogleAppsScript.Calendar.Calendar;

  /**
   * constructor
   * @param id:string? calendar ID
   */
  public constructor(id: string?) {
    if (id) {
      this.calendar = CalendarApp.getCalendarById(id);
    } else {
      this.calendar = CalendarApp.getDefaultCalendar();
    }
  }

  /**
   * event
   * @param title:string? event title
   * @param title:string? event title
   */
  public event(title:string, start:Date, end:Data, option?:any) {
    this.calendar.createEvent(title, start, end, option);
  }
}

export default Calendar;
