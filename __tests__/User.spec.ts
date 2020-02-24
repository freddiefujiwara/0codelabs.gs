import User from '../src/User';

describe('User', () => {
  test('password', () => {
    expect(User.password(10).length).toBe(10);
  });
});
