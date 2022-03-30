import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { IForecastData, IWeatherData } from './weather';
import { throwError as observableThrowError,  Observable, zip } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherAPIUrl: string = 'https://api.openweathermap.org/data/2.5/weather'
  forecastAPIUrl: string = 'https://api.openweathermap.org/data/2.5/forecast/daily'
  weatherAPIKey: string = '5a4b2d457ecbef9eb2a71e480b947604'

  constructor(private http: HttpClient)  { }


getWeatherDataByZipCode(zipCode: string): Observable<IWeatherData> 
{
  let headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  // Initialize Params Object
  let params = new HttpParams();

  // Begin assigning parameters
  params = params.append('zip', zipCode);
  params = params.append('appid', this.weatherAPIKey);

  return this.http.get<IWeatherData>(this.weatherAPIUrl, { params: params });
}

getAllWeatherData(zipCodesList: string[]): IWeatherData[]
{
  let weatherdata: IWeatherData[] = [];
  zipCodesList.forEach(function (zipCode, index) {
    this.getWeatherDataByZipCode(zipCode).subscribe({
      next: (v) => {
        v.zip = zipCode;
        v.index = index;
        weatherdata.push(v)
      },
      error: (e) => console.error(e)
  })
  }.bind(this));
  
  return weatherdata;
}

getForecast(zipCode: string): Observable<IForecastData>
{
  let headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

  // Initialize Params Object
  let params = new HttpParams();

  // Begin assigning parameters
  params = params.append('zip', zipCode);
  params = params.append('appid', this.weatherAPIKey);

  return this.http.get<IForecastData>(this.forecastAPIUrl, { params: params });
}



}




