import { ICoord, IWeather } from "./weather";

export interface IForecastData {
    city: ICity;
    cod: string;
    message: number;
    cnt: number;
    list: IList[];
  }
  
  export interface ICity {
    id: number;
    name: string;
    coord: ICoord;
    country: string;
    population: number;
    timezone: number;
  }
  
  export interface ITemp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }
  
  export interface IFeelsLike {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }
  
  export interface IList {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: ITemp;
    feels_like: IFeelsLike;
    pressure: number;
    humidity: number;
    weather: IWeather[];
    speed: number;
    deg: number;
    gust: number;
    clouds: number;
    pop: number;
  }
  