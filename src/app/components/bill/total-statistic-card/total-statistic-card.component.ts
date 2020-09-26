import { Component, OnInit } from '@angular/core';

import { TimeService } from '../../../services/time/time.service';
import { MoneyService } from '../../../services/money/money.service';

import { MoneyNumber } from '../../../services/moneyNumber';

@Component({
  selector: 'app-total-statistic-card',
  templateUrl: './total-statistic-card.component.html',
  styleUrls: ['./total-statistic-card.component.scss'],
})
export class TotalStatisticCardComponent implements OnInit {
  year: string;
  month: string;
  costMoney: MoneyNumber;
  earnMoney: MoneyNumber;

  constructor(
    private timeService: TimeService,
    private moneyService: MoneyService,
  ) { }

  ngOnInit(): void {
    this.getYear();
    this.getMonth();
    this.getMoney();
  }

  getMonth(): void {
    this.month = this.timeService.getMonth();
  }

  getYear(): void {
    this.year = this.timeService.getYear();
  }

  getMoney(): void {
    const { cost, earn } = this.moneyService.getMonthMoney();
    this.costMoney = this.moneyService.processMoney(cost);
    this.earnMoney = this.moneyService.processMoney(earn);
  }
}
