/* eslint-disable no-global-assign, no-underscore-dangle */

const birthday = require('./index');

describe('Determines age based on birthday', () => {
  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(Date.now())).toBe(0);
  });
});


describe('Determines age based on birthday', () => {
  let _Date;
  beforeAll(() => {
    // Save original date module
    _Date = Date;
  });

  afterAll(() => {
    // Reset Date
    Date = _Date;
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Returns 0 if birthday is today', () => {
    expect(birthday.howOld(new Date('01 Jan 2018'))).toBe(0);
  });
  test('Returns 1 if today is one year after birthday', () => {
    expect(birthday.howOld(new Date('01 Jan 2017'))).toBe(1);
  });
  test('Returns 0 if today is the day before the first birthday', () => {
    expect(birthday.howOld(new Date('02 Jan 2017'))).toBe(0);
  });
  test('Returns 1 if today is the day after the first birthday', () => {
    expect(birthday.howOld(new Date('31 Dec 2016'))).toBe(1);
  });
  test('Returns 1 if today is 18 months after the birthdate', () => {
    expect(birthday.howOld(new Date('01 Jul 2016'))).toBe(1);
  });
  test('Returns 10 if today is 10 years after birthdate', () => {
    expect(birthday.howOld(new Date('01 Jan 2008'))).toBe(10);
  });
});
