import { RootScreen } from './template';
import { useScreen } from './useScreen';

const Index = () => {
  const { locationRequest, weatherRequest, globalLoading } = useScreen();
  return <RootScreen
    locationRequest={locationRequest}
    weatherRequest={weatherRequest}
    globalLoading={globalLoading}
  />
}

export default Index