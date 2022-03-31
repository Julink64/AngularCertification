import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForecastData } from '../services/forecast';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecast: IForecastData;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {

    // Getting the forecast for the current zip code
    this.route.params.subscribe(params => 
      {
          this.weatherService.getForecast(params['zip']).subscribe({
            next: (v) => {
              this.forecast = v;
            },
            error: (e) => console.error(e)
        })
      });
  }

}
