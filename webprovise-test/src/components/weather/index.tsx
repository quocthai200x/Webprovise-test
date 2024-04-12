import WeatherHeroInfo from "./WeatherInfo";
import { WeatherData } from "../../types";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentWeatherState } from "../../store/weather";
import AdditionalDayCard from "./AdditionalDayCard";
import { userSettingsState } from "../../store/settings";
import { typeTemputure } from "../../constant";
import { twJoin } from "tailwind-merge";


const current: WeatherData = {
    dt: 1712909650,
    sunrise: 1712875199,
    sunset: 1712920457,
    temp: 304.13,
    feels_like: 305.73,
    pressure: 1007,
    humidity: 50,
    dew_point: 292.49,
    uvi: 1.14,
    clouds: 100,
    visibility: 10000,
    wind_speed: 5.99,
    wind_deg: 152,
    wind_gust: 6.09,
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d"
        }
    ]
};

const WeatherSection = () => {
    const setCurrentWeather = useSetRecoilState(currentWeatherState);
    const [settings, setSettings] = useRecoilState(userSettingsState);

    useEffect(() => {
        setCurrentWeather(current)
    }, []);

    const changeTempDisplay = (mode: string) => {
        setSettings({ ...settings, temperature: mode })
    }
    const onChooseCard = (index: number) => {
        setSettings({ ...settings, dayChosen: index })
    }
    return (
        <div className="w-full shadow-wp-252 border-wp-96 border rounded-[4px]">
            <WeatherHeroInfo onClickC={() => changeTempDisplay(typeTemputure.C)} onClickF={() => changeTempDisplay(typeTemputure.F)} />
            <div className="flex">
                {Array(8).fill(1).map((_, index) =>
                    // the list not have any shuffle case, so can pass the index as a key
                    <div key={index} className={twJoin(settings?.dayChosen === index? "bg-wp-gray-f7":"","border duration-200 ease-in-out border-wp-96 flex-1 cursor-pointer hover:bg-red-200")} onClick={() => onChooseCard(index)}>
                        <AdditionalDayCard min={304.13} max={305.73} icon="04d" dt={1712909650} />
                    </div>)}
            </div>
        </div>
    );
}

export default WeatherSection;