import { useMemo } from "react";
import { convertKelvinToCelsius, convertKelvinToFahrenheit, convertTimestampToShortDayName } from "../../utils";
import { userSettingsState } from "../../store/settings";
import { useRecoilValue } from "recoil";
import { typeTemputure } from "../../constant";

type FollowingDayCardProps = {
    min?: number;
    max?: number;
    icon?: string;
    dt?: number;
}

const FollowingDayCard = (props: FollowingDayCardProps) => {
    const { min: kelvinMin, max: kelvinMax, icon, dt } = props
    const { temperature } = useRecoilValue(userSettingsState);
    const isFTemp = (temperature === typeTemputure.F);

    const celsiusMin = useMemo(() => {
        return convertKelvinToCelsius(kelvinMin!)
    }, [kelvinMin])

    const celsiusMax = useMemo(() => {
        return convertKelvinToCelsius(kelvinMax!)
    }, [kelvinMax])

    const fahrenheitMin = useMemo(() => {
        return convertKelvinToFahrenheit(kelvinMin!)
    }, [kelvinMin])

    const fahrenheitMax = useMemo(() => {
        return convertKelvinToFahrenheit(kelvinMax!)
    }, [kelvinMax])

    const shortNameDay = useMemo(() => { return convertTimestampToShortDayName(dt!) }, [dt])

    return (
        <div className="flex flex-col items-center py-5 gap-1 w-full">
            <span className="font-bold text-wp-14 leading-wp-14">{shortNameDay}</span>
            <img width={48} height={48} src={`http://openweathermap.org/img/wn/${icon}.png`} alt="weather-icon" />
            <span className="text-wp-18 leading-wp-18 font-bold">{Math.round(isFTemp ? fahrenheitMax : celsiusMax) + '°'}</span>
            <span className="text-wp-14 leading-wp-14">{Math.round(isFTemp ? fahrenheitMin : celsiusMin) + '°'}</span>
        </div>
    )
}

export default FollowingDayCard;