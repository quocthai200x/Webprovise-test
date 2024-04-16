import WeatherHeroInfo from "./WeatherInfo";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentWeatherState } from "../../store/weather";
import FollowingDayCard from "./FollowingDayCard";
import { userSettingsState } from "../../store/settings";
import { typeTemputure } from "../../constant";
import { twJoin } from "tailwind-merge";
import { getAirQualityString } from "../../utils";
import useWeather from "../../hooks/useWeather";
import { DailyTemp } from "../../types";
import Loading from "../Loading";

const WeatherSection = () => {
    const setCurrentWeather = useSetRecoilState(currentWeatherState);
    const [settings, setSettings] = useRecoilState(userSettingsState);
    const { weatherData, airQualityData, isLoading } = useWeather();

    useEffect(() => {
        // check currrent day
        if (weatherData?.current) { // check for render
            if (settings?.dayChosen === 0) {
                setCurrentWeather({ ...weatherData?.current, air_quality: getAirQualityString(airQualityData?.list[0]?.main?.aqi) })
            }
            // check other day and assign max temp to display
            else {
                setCurrentWeather({ ...weatherData?.daily?.[settings?.dayChosen], temp: (weatherData?.daily?.[settings?.dayChosen]?.temp as DailyTemp).max, air_quality: "" })
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settings?.dayChosen]);

    const changeTempDisplay = (mode: string) => {
        setSettings({ ...settings, temperature: mode })
    }
    const onChooseCard = (index: number) => {
        setSettings({ ...settings, dayChosen: index })
    }

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="w-full shadow-wp-252 border border-wp-96  rounded-[4px]">
            <WeatherHeroInfo
                onClickC={() => changeTempDisplay(typeTemputure.C)}
                onClickF={() => changeTempDisplay(typeTemputure.F)}
            />
            <div className="grid grid-cols-4 xs:grid-cols-8">
                {weatherData?.daily?.map((_, index) =>
                // the list not have any shuffle case, so can pass the index as a key
                {
                    const { temp, weather, dt } = weatherData?.daily[index] || {};
                    return (
                        <div key={index}
                            className={twJoin(settings?.dayChosen === index ? "bg-wp-gray-f7 gradient-border" : "border-wp-96", "border duration-200 ease-in-out  flex-1 cursor-pointer hover:bg-wp-gray-f7")}
                            onClick={() => onChooseCard(index)}>
                            <FollowingDayCard min={(temp as DailyTemp).min} max={(temp as DailyTemp).max} icon={weather?.[0]?.icon} dt={dt} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
}

export default WeatherSection;