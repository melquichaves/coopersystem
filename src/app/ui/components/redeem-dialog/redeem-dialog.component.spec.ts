import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemDialogComponent } from './redeem-dialog.component';

describe('RedeemDialogComponent', () => {
  let component: RedeemDialogComponent;
  let fixture: ComponentFixture<RedeemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
