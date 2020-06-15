import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticePanelItemComponent } from './notice-panel-item.component';

describe('NoticePanelItemComponent', () => {
  let component: NoticePanelItemComponent;
  let fixture: ComponentFixture<NoticePanelItemComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NoticePanelItemComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticePanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
