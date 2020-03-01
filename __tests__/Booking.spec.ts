import Booking from '../src/Booking';

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
    1, 2, 3, 4,
  ]),
})) as any;

describe('Booking', () => {
  it('can create an Event', () => {
    const calendar = new Booking('ssid');
    calendar.book('title', new Date(), new Date());
  });
  it('can check event duplication', () => {
    let calendar = new Booking();
    expect(calendar.duplication(new Date(), new Date())).toBe(false);
    calendar = new Booking('ssid');
    expect(calendar.duplication(new Date(), new Date())).toBe(true);
  });
});
