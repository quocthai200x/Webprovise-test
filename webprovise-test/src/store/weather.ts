import { atom } from "recoil";
import { DayWeather, Location } from "../types";

export const locationState = atom<Location>({
    key: "WeatherLocation",
    default: {
        country: undefined,
        city: undefined,
        lat: undefined,
        lon: undefined
    } 
})

export const currentWeatherState = atom<DayWeather>({
    key: "CurrentWeatherState",
    default: {
        air_quality: undefined,
        dt: undefined,
        temp: undefined,
        humidity: undefined,
        wind_speed: undefined,
        wind_deg: undefined,
        wind_gust: undefined,
        weather: [{
            id: undefined,
            main: undefined,
            description: undefined,
            icon: undefined,
        }]
    }
})