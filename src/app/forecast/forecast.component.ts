import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForecastData } from '../services/weather';
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
