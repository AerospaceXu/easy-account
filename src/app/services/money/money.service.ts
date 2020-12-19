import { Injectable } from '@angular/core';

import { Record } from '../../interfaces/record';

import { getTime } from '../../utils/getTime';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  listRecord: Record[] = [];

  getCurrentMonthMoney(): {
    cost: number;
    earn: number;
  } {
    const thisMonth = this.listRecord.filter((record) => {
      const currentYear = getTime('year');
      const currentMonth = getTime('month');
      const { date } = record;
      const recordYear = getTime('year', date);
      const recordMonth = getTime('month', date);
      return recordYear === currentYear && recordMonth === currentMonth;
    });

    const monthMoney = {
      cost: 0,
      earn: 0,
    };
    thisMonth.forEach((record) => {
      const { money, type } = record;
      if (type === 'cost') {
        monthMoney.cost += money;
      } else {
        monthMoney.earn += money;
      }
    });

    return { ...monthMoney };
  }
}
