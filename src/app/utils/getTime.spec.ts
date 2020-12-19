import { getTime } from './getTime';

describe('getTime', () => {
  it('get current month from getTime()', () => {
    const month = getTime('month');
    expect(month).toBe(new Date().getMonth());
  });

  it('get special month from getTime()', () => {
    const specialDate = new Date(
      'Sat Dec 19 2020 21:37:48 GMT+0800 (中国标准时间)'
    );
    const month = getTime('month', specialDate);
    expect(month).toBe(12);
  });

  it('get special month as string from getTime()', () => {
    const specialDate = new Date(
      'Sat Feb 19 2020 21:37:48 GMT+0800 (中国标准时间)'
    );
    const month = getTime('month', specialDate, true);
    expect(month).toBe('02');
  });
});
