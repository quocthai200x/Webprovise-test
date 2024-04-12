import PageLayout from './layout'
import WidgetWeather from './widget/weather'
import { RecoilRoot } from 'recoil';

function WeatherApp() {
  return (
    <RecoilRoot>
      <PageLayout>
        <WidgetWeather />
      </PageLayout>
    </RecoilRoot>
  )
}

export default WeatherApp
