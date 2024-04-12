import { useRecoilValue } from "recoil";
import { currentWeatherState, locationState } from "../../store/weather";
import { capitalizeFirstLetter, convertFahrenheitToCelsius, convertTimestampToFullNameDay, convertWindDegreesToDirection } from "../../utils";
import { LuDot } from "react-icons/lu";
import { useMemo } from "react";
import { twJoin } from "tailwind-merge";
import { userSettingsState } from "../../store/settings";
import { typeTemputure } from "../../constant";


type WeatherHeroInfoProps = {
    onClickC: () => void;
    onClickF: () => void;
};
const WeatherHeroInfo = ({ onClickC, onClickF }: WeatherHeroInfoProps) => {
    const { city, country } = useRecoilValue(locationState);
    const { weather, temp: fahrenheit, dt, humidity, wind_deg, wind_speed } = useRecoilValue(currentWeatherState);
    const { temperature } = useRecoilValue(userSettingsState);
    const isFTemp = (temperature === typeTemputure.F);

    const celsius = useMemo(() => {
        return convertFahrenheitToCelsius(fahrenheit)
    }, [fahrenheit])

    const windDiretion = useMemo(() => {
        return convertWindDegreesToDirection(wind_deg)
    }, [wind_deg])

    return (
        <div className="p-5">
            <div className=" font-bold text-wp-20 leading-wp-20">
                {city && country ?
                    <span>{city + ', ' + country}</span> : <span>{"-----------"}</span>
                }
            </div>
            <div className=" text-wp-gray-666 flex items-center text-wp-14 leading-wp-14 font-">
                <span>{convertTimestampToFullNameDay(dt)}</span>
                <LuDot />
                <span>{capitalizeFirstLetter(weather[0]?.description)}</span>
            </div>
            <div className="columns-2	">
                <div className="flex overflow-hidden items-start gap-2">
                    <img width={64} height={64} src={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`} alt="weather-icon" />

                    <span className="text-wp-44 leading-wp-44 font-bold">{Math.round(isFTemp ? fahrenheit : celsius) + '°'}</span>
                    <span className="font-bold text-wp-14 leading-[2.026rem]">
                        <span onClick={() => onClickF()} className={twJoin('cursor-pointer', isFTemp ? "underline" : "text-wp-gray-666")}>F</span>
                        <span> / </span>
                        <span onClick={() => onClickC()} className={twJoin('cursor-pointer ', isFTemp ? "text-wp-gray-666" : "underline")}>C</span>
                    </span>
                </div>
                <div className="flex flex-col text-wp-14 leading-wp-14">
                    <span>Humidity: {humidity}%</span>
                    <span>Wind: {wind_speed} KPH {windDiretion}</span>
                    <span>Air Quality: Moderate</span>
                </div>

            </div>
        </div>
    );
};

export default WeatherHeroInfo;