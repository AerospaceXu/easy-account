import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBillComponent } from './app-bill.component';

describe('AppBillComponent', () => {
  let component: AppBillComponent;
  let fixture: ComponentFixture<AppBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
