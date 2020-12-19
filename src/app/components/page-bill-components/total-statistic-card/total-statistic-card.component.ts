import { Component, OnInit } from '@angular/core';

import { MoneyService } from '../../../services/money/money.service';

import { Money } from '../../../interfaces/money';

import { processMoney } from 'src/app/utils/process-money';
import { getTime } from '../../../utils/getTime';

@Component({
  selector: 'app-total-statistic-card',
  templateUrl: './total-statistic-card.component.html',
  styleUrls: ['./total-statistic-card.component.scss'],
})
export class TotalStatisticCardComponent implements OnInit {
  year: string;
  month: string;
  costMoney: Money;
  earnMoney: Money;

  constructor(private moneyService: MoneyService) {}

  ngOnInit(): void {
    this.getYear();
    this.getMonth();
    this.getMoney();
  }

  getMonth(): void {
    this.month = getTime('month', undefined, true) as string;
  }

  getYear(): void {
    this.year = getTime('year', undefined, true) as string;
  }

  getMoney(): void {
    const { cost, earn } = this.moneyService.getCurrentMonthMoney();
    this.costMoney = processMoney(cost);
    this.earnMoney = processMoney(earn);
  }
}
