import { Injectable } from '@angular/core';

import { ListRecord } from '../listRecord';
import { MoneyNumber } from '../moneyNumber';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  listRecord: ListRecord[] = [];

  constructor() {}

  processMoney(money: number): MoneyNumber {
    const moneySeparate: MoneyNumber = {
      integer: '0',
      decimal: '00',
    };
    const moneyStr = money.toString();
    const pointPlace = moneyStr.indexOf('.');
    if (pointPlace === -1) {
      moneySeparate.integer = moneyStr;
    } else {
      moneySeparate.integer = money.toString().slice(0, pointPlace);
      const decimal = money.toString().slice(pointPlace + 1);
      moneySeparate.decimal = decimal.length === 1 ? decimal + '0' : decimal;
    }
    return moneySeparate;
  }

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
