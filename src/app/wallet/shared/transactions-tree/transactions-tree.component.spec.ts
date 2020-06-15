import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTreeComponent } from './transactions-tree.component';

describe('TransactionsTreeComponent', () => {
  let component: TransactionsTreeComponent;
  let fixture: ComponentFixture<TransactionsTreeComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TransactionsTreeComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
