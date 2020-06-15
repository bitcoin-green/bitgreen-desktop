import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBalanceComponent } from './overview-balance.component';

describe('OverviewBalanceComponent', () => {
  let component: OverviewBalanceComponent;
  let fixture: ComponentFixture<OverviewBalanceComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OverviewBalanceComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
