import Calendar from '../src/Calendar';

// GAS Mock
CalendarApp.getDefaultCalendar = jest.fn(() => ({
  createEvent: jest.fn(() => ({
  })),
})) as any;

CalendarApp.getCalendarById = jest.fn(() => ({
  createEvent: jest.fn(() => ({
  })),
})) as any;

describe('Calendar', () => {
  it('can create an Event', () => {
    const calendar = new Calendar('ssid');
    calendar.event('title', new Date(), new Date());
  });
});
