export interface IWeatherData {
    coord: ICoord;
    weather: IWeather[];
    base: string;
    main: IMain;
    visibility: number;
    wind: IWind;
    clouds: IClouds;
    dt: number;
    sys: ISys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    zip: string;
    index: number;
}

export interface ICoord {
    lon: number;
    lat: number;
}

export interface IWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface IWind {
    speed: number;
    deg: number;
    gust: number;
}

export interface IClouds {
    all: number;
}

export interface ISys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}


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
  