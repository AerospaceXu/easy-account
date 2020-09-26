import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  getMonth(): string {
    const month = new Date().getMonth();
    return month > 10 ? month.toString() : '0' + month;
  }

  getYear(): string {
    return new Date().getFullYear() + '年';
  }
}
