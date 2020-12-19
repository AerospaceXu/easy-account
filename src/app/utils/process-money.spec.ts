import { processMoney } from './process-money';

describe('processMoney', () => {
  it('process ¥1.5', () => {
    const money = processMoney(1.5);
    expect(money).toEqual({
      decimal: '50',
      integer: '1',
    });
  });
});
