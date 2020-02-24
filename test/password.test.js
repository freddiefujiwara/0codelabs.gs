var password = require('../src/password.js');
test('password',() => {
    expect(password(10).length).toBe(10);
});
