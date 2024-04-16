import { useRecoilState, useSetRecoilState } from "recoil";
import LocationInput from "../components/InputWithCancelButton";
import { DataFormProps } from "../types";
import { locationState } from "../store/weather";
import WeatherInfo from "../components/weather";
import { getLocationOnCityName } from "../apis/weather";
import { userSettingsState } from "../store/settings";
import { useErrorBoundary } from "react-error-boundary";
import Empty from "../components/Empty";

const WidgetWeather = () => {
    const [weatherLocation, setWeatherLocation] = useRecoilState(locationState);
    const { showBoundary } = useErrorBoundary();
    const setSettings = useSetRecoilState(userSettingsState);
    const onSubmit = (data: DataFormProps) => {
        if (data.data === '') return;
        getLocationOnCityName(data.data).then((response) => {
            setWeatherLocation({
                city: response?.name,
                country: response?.country,
                lat: response?.lat,
                lon: response?.lon,
            });
            setSettings({ dayChosen: 0, temperature: 'C' });
        }).catch((error) => {
            showBoundary(error);
            console.error(error);
            throw error;
        });
    }


    return (
        <div className="flex flex-col gap-3">
            <LocationInput onSubmit={onSubmit} />
            {weatherLocation?.city ?
                <WeatherInfo /> : <Empty />
            }
        </div>

    )
};
export default WidgetWeather;