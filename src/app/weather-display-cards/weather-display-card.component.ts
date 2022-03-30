import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeatherData } from '../services/weather';

@Component({
  selector: 'weather-display-card',
  templateUrl: './weather-display-card.component.html',
  styleUrls: ['./weather-display-card.component.css']
})
export class WeatherDisplayCardComponent implements OnInit {
  @Input() weatherData: IWeatherData;

  @Output() deleteCardOutput:EventEmitter<number>= new EventEmitter();  

  weatherIcon: string;

  constructor() { }

  ngOnInit(): void {

  }

  deleteCard(index: number){  
    this.deleteCardOutput.emit(index);  
 } 

}
