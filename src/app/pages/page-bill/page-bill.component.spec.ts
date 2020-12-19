import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBillComponent } from './page-bill.component';

describe('AppBillComponent', () => {
  let component: PageBillComponent;
  let fixture: ComponentFixture<PageBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageBillComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
