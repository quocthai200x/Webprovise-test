import { useMemo } from "react";
import { convertFahrenheitToCelsius, convertTimestampToShortDayName } from "../../utils";
import { userSettingsState } from "../../store/settings";
import { useRecoilValue } from "recoil";
import { typeTemputure } from "../../constant";

type WeatherAddtionalDayCardProps = {
    min: number;
    max: number;
    icon: string;
    dt: number;
}

const WeatherAddtionalDayCard = (props: WeatherAddtionalDayCardProps) => {
    const { min: fahrenheitMin, max: fahrenheitMax, icon, dt } = props
    const { temperature } = useRecoilValue(userSettingsState);
    const isFTemp = (temperature === typeTemputure.F);

    const celsiusMin = useMemo(() => {
        return convertFahrenheitToCelsius(fahrenheitMin)
    }, [fahrenheitMin])

    const celsiusMax = useMemo(() => {
        return convertFahrenheitToCelsius(fahrenheitMax)
    }, [fahrenheitMax])

    const shortNameDay = useMemo(() => { return convertTimestampToShortDayName(dt) }, [dt])
    return (
        <div className="flex flex-col items-center py-5 gap-1 w-full">
            <span className="font-bold text-wp-14 leading-wp-14">{shortNameDay}</span>
            <img width={48} height={48} src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather-icon" />
            <span className="text-wp-18 leading-wp-18 font-bold">{Math.round(isFTemp ? fahrenheitMax : celsiusMax) + '°'}</span>
            <span className="text-wp-14 leading-wp-14">{Math.round(isFTemp ? fahrenheitMin : celsiusMin) + '°'}</span>
        </div>
    )
}

export default WeatherAddtionalDayCard;