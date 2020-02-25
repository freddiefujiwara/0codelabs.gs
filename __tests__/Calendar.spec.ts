import Calendar from '../src/Calendar';

// GAS Mock
CalendarApp.getDefaultCalendar = jest.fn(() => ({
  createEvent: jest.fn(() => ({
  })),
  getEvents: jest.fn(() => [
  ]),
})) as any;

CalendarApp.getCalendarById = jest.fn(() => ({
  createEvent: jest.fn(() => ({
  })),
  getEvents: jest.fn(() => [
    1,2,3,4
  ]),
})) as any;

describe('Calendar', () => {
  it('can create an Event', () => {
    const calendar = new Calendar('ssid');
    calendar.event('title', new Date(), new Date());
  });
  it('can check event duplication', () => {
    let calendar = new Calendar();
    expect(calendar.duplication(new Date(), new Date())).toBe(false);
    let calendar = new Calendar('ssid');
    expect(calendar.duplication(new Date(), new Date())).toBe(true);
  });
});
