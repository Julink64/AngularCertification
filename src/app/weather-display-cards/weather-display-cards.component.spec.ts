import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDisplayCardComponent } from './weather-display-card.component';

describe('WeatherDisplayCardsComponent', () => {
  let component: WeatherDisplayCardComponent;
  let fixture: ComponentFixture<WeatherDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
