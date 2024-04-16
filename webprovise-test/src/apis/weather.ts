import axios from "../axiosConfiguration";
import { AirQuality, CityData, WeatherData } from "../types";

export const getLocationOnCityName = async (city: string): Promise<CityData> => {
    const endpoint = '/geo/1.0/direct';
    const queryParams = {
        q: city,
        limit: 1,
    };

    try {
        const response = await axios.get(`${endpoint}`, { params: queryParams });
        return response?.data?.[0];
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error;
    }
}

export const getWeatherData = async ({ lat, lon, exclude }: { lat?: number, lon?: number, exclude?: string }): Promise<WeatherData> => {
    const endpoint = '/data/2.5/onecall';
    const queryParams = {
        lat, lon, exclude
    };

    try {
        const response = await axios.get(`${endpoint}`, { params: queryParams });
        return response?.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

export const getAirQuality = async ({ lat, lon }: { lat?: number, lon?: number, }): Promise<AirQuality> => {
    const endpoint = '/data/2.5/air_pollution';
    const queryParams = {
        lat, lon
    };

    try {
        const response = await axios.get(`${endpoint}`, { params: queryParams });
        return response?.data;
    } catch (error) {
        console.error('Error fetching air quality data:', error);
        throw error;
    }
}



