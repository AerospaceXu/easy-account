import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStatisticComponent } from './app-statistic.component';

describe('AppStatisticComponent', () => {
  let component: AppStatisticComponent;
  let fixture: ComponentFixture<AppStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
