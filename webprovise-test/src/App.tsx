import PageLayout from './layout'
import WidgetWeather from './widget/weather'
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './components/Error';

function WeatherApp() {
  return (
    <RecoilRoot>
      <PageLayout>
        <ErrorBoundary FallbackComponent={ErrorFallback} >
          <WidgetWeather />
        </ErrorBoundary>
      </PageLayout>
    </RecoilRoot>
  )
}

export default WeatherApp
