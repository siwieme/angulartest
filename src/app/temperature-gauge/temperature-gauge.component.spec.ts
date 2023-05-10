import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureGaugeComponent } from './temperature-gauge.component';

describe('TemperatureGaugeComponent', () => {
  let component: TemperatureGaugeComponent;
  let fixture: ComponentFixture<TemperatureGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
