
export interface Weather {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface DailyTemp {
  day?: number;
  min?: number;
  max?: number;
  night?: number;
  eve?: number;
  morn?: number;
}

export interface DayWeather {
  air_quality?: string;
  dt?: number;
  sunrise?: number;
  sunset?: number;
  moonrise?: number;
  moonset?: number;
  moon_phase?: number;
  temp?: DailyTemp | number;
  feels_like?: {
    day?: number;
    night?: number;
    eve?: number;
    morn?: number;
  } | number;
  pressure?: number;
  humidity?: number;
  dew_point?: number;
  wind_speed?: number;
  wind_deg?: number;
  wind_gust?: number;
  weather?: Weather[];
  clouds?: number;
  pop?: number;
  rain?: number;
  uvi?: number;
}

export interface WeatherData {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: DayWeather;
  daily: DayWeather[];
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface AirQualityComponent {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

export interface AirQualityInfo {
  main: {
    aqi: number;
  };
  components: AirQualityComponent;
  dt: number;
}

export interface AirQuality {
  coord: Coordinates;
  list: AirQualityInfo[];
}

export interface CityData {
  name: string;
  local_names: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
}
