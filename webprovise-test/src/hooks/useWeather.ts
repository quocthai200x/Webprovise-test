import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentWeatherState, locationState } from "../store/weather";
import { getAirQuality, getWeatherData } from "../apis/weather";
import { AirQuality, WeatherData } from "../types";
import { getAirQualityString } from "../utils";

const useWeather = () => {
    const location = useRecoilValue(locationState);
    const setCurrentWeather = useSetRecoilState(currentWeatherState);
    const canFetch = location?.lat && location?.lon && location?.city && location?.country;
    const [weatherData, setWeatherData] = useState({} as WeatherData);
    const [airQualityData, setAirQualityData] = useState({} as AirQuality);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                if (canFetch) {
                    const [weatherResponse, airQualityResponse] = await Promise.all([
                        getWeatherData({ lat: location.lat, lon: location.lon, exclude: 'hourly,minutely' }),
                        getAirQuality({ lat: location.lat, lon: location.lon })
                    ]);
                    setWeatherData(weatherResponse);
                    setAirQualityData(airQualityResponse);
                    setCurrentWeather({ ...weatherResponse?.current, air_quality: getAirQualityString(airQualityResponse?.list[0]?.main?.aqi) })
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return { airQualityData, weatherData, isLoading };
};

export default useWeather;
