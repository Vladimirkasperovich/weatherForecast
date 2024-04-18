export interface WeatherDataType {
    coord: WeatherDataTypeCoord;
    weather: WeatherDataTypeWeather[];
    base: string;
    main: WeatherDataTypeMain;
    visibility: number;
    wind: WeatherDataTypeWind;
    clouds: WeatherDataTypeClouds;
    dt: number;
    sys: WeatherDataTypeSys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}
export interface WeatherDataTypeCoord {
    lon: number;
    lat: number;
}
export interface WeatherDataTypeWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
export interface WeatherDataTypeMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}
export interface WeatherDataTypeWind {
    speed: number;
    deg: number;
    gust: number;
}
export interface WeatherDataTypeClouds {
    all: number;
}
export interface WeatherDataTypeSys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}