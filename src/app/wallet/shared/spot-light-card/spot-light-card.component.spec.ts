import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotLightCardComponent } from './spot-light-card.component';

describe('SpotLightCardComponent', () => {
  let component: SpotLightCardComponent;
  let fixture: ComponentFixture<SpotLightCardComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SpotLightCardComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotLightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
