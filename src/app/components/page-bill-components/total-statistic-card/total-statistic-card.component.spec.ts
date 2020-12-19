import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStatisticCardComponent } from './total-statistic-card.component';

describe('TotalStatisticCardComponent', () => {
  let component: TotalStatisticCardComponent;
  let fixture: ComponentFixture<TotalStatisticCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalStatisticCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStatisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
