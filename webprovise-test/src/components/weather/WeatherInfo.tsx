import { useRecoilValue } from "recoil";
import { currentWeatherState, locationState } from "../../store/weather";
import { capitalizeFirstLetter, convertKelvinToCelsius, convertKelvinToFahrenheit, convertMeterPerSecondToKilometerPerHour, convertMeterPerSecondToMilePerHour, convertTimestampToFullNameDay, convertWindDegreesToDirection } from "../../utils";
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
    const { weather, temp: kelvin, dt, humidity, wind_deg, wind_speed, air_quality } = useRecoilValue(currentWeatherState);
    const { temperature } = useRecoilValue(userSettingsState);
    const isFTemp = (temperature === typeTemputure.F);

    const { celsius, fahrenheit } = useMemo(() => {
        return {
            celsius: Math.round(convertKelvinToCelsius(kelvin as number)),
            fahrenheit: Math.round(convertKelvinToFahrenheit(kelvin as number))
        }
    }, [kelvin])

    const { windKPH, windMPH } = useMemo(() => {
        return {
            windKPH: Math.round(convertMeterPerSecondToKilometerPerHour(wind_speed!)),
            windMPH: Math.round(convertMeterPerSecondToMilePerHour(wind_speed!))
        }
    }, [wind_speed])

    const windDirection = useMemo(() => {
        return convertWindDegreesToDirection(wind_deg!)
    }, [wind_deg])

    return (
        <div className="p-5">
            <div className=" font-bold text-wp-20 leading-wp-20">
                {city && country ?
                    <span>{city + ', ' + country}</span> : <span>{"-----------"}</span>
                }
            </div>
            <div className=" text-wp-gray-666 flex items-center text-wp-14 leading-wp-14 font-">
                <span>{convertTimestampToFullNameDay(dt!)}</span>
                <LuDot />
                <span>{capitalizeFirstLetter(weather?.[0]?.description || '')}</span>
            </div>
            <div className="xs:columns-2">
                <div className="flex overflow-hidden items-start gap-2 xs:mb-0 mb-4">
                    <img width={64} height={64} src={`http://openweathermap.org/img/wn/${weather?.[0]?.icon}.png`} alt="weather-icon" />

                    <span className="text-wp-44 leading-wp-44 font-bold">{isFTemp ? fahrenheit : celsius}°</span>
                    <span className="font-bold text-wp-14 leading-[2.026rem]">
                        <span onClick={() => onClickF()} className={twJoin('cursor-pointer', isFTemp ? "underline" : "text-wp-gray-666")}>F</span>
                        <span> / </span>
                        <span onClick={() => onClickC()} className={twJoin('cursor-pointer ', isFTemp ? "text-wp-gray-666" : "underline")}>C</span>
                    </span>
                </div>
                <div className="flex flex-col text-wp-14 leading-wp-14 gap-1">
                    <span>Humidity: {humidity}%</span>
                    <span>Wind: {isFTemp ? windMPH + " MPH" : windKPH + " KPH"}{" "}{windDirection}</span>
                    {air_quality ? <span>Air Quality: {air_quality}</span> : null}
                </div>

            </div>
        </div>
    );
};

export default WeatherHeroInfo;