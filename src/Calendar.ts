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
   * @param title:string event title
   * @param start:Date event starts at
   * @param end:Date event ends at
   * @param option?:any
   */
  public event(title:string, start:Date, end:Data, option?:any) {
    this.calendar.createEvent(title, start, end, option);
  }

  /**
   * duplication
   * @param start:Date event starts at
   * @param end:Date event ends at
   */
  public duplication(start:Date, end:Data) {
    return this.calendar.getEvents(start, end).length !== 0;
  }
}

export default Calendar;
