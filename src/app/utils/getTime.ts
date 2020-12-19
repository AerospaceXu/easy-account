const timeFunctions = new Map<
  TimeType,
  (date?: Date, toString?: boolean) => number | string
>([
  [
    'month',
    (date, toString) => {
      let month: number;
      if (date) {
        month = date.getMonth();
      } else {
        month = new Date().getMonth();
      }
      if (!toString) {
        return month;
      }
      return month > 10 ? month.toString() : '0' + month;
    },
  ],
  [
    'year',
    (date, toString) => {
      let year: number;
      if (date) {
        year = date.getFullYear();
      } else {
        year = new Date().getFullYear();
      }
      if (!toString) {
        return year;
      }
      return year + '年';
    },
  ],
]);

type TimeType = 'month' | 'year';

export const getTime = (
  type: TimeType,
  date?: Date,
  toString?: boolean
): number | string => {
  return timeFunctions.get(type)(date, toString);
};
