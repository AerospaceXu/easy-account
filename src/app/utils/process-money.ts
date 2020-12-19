import { MoneyNumber } from '../services/moneyNumber';

export const processMoney = (money: number): MoneyNumber => {
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
