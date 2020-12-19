import { Injectable } from '@angular/core';

import { ListRecord } from '../listRecord';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  listRecord: ListRecord[] = [];

  constructor() {}

  getMonthMoney(): {
    cost: number;
    earn: number;
  } {
    const thisMonth = this.listRecord.filter((record) => {
      const nowDate = new Date();
      const { date } = record;
      return (
        date.getFullYear() === nowDate.getFullYear() &&
        date.getMonth() === nowDate.getMonth()
      );
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
