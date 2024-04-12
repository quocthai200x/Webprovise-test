import { useSetRecoilState } from "recoil";
import LocationInput from "../components/InputWithCancelButton";
import { DataFormProps } from "../types";
import { locationState } from "../store/weather";
import WeatherInfo from "../components/weather";



const WidgetWeather = () => {
    const setWeatherLocation = useSetRecoilState(locationState);
    const onSubmit = (data: DataFormProps) => {
        console.log(data)
        // TODO: call api lay lat va set lai location
        setWeatherLocation({
            city: 'Hanoi', country: 'VN', lat: 21.0294498,
            lon: 105.8544441,
        });
    }
    return (
        <div className="flex flex-col gap-3">
            <LocationInput onSubmit={onSubmit} />
            <WeatherInfo />
        </div>
    )
};
export default WidgetWeather;