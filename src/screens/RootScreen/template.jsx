import { View, ImageBackground, Image, Text } from 'react-native';
import React from 'react';
import { CardWeather, HeaderCard, IconImage, Button } from '../../components';
import { styles } from './styles';
import { MyLoader } from '../LoadScreen/skeleton';
import { backgroundConverter } from '../../utils/backgroundConverter';
import { ErrorScreen } from '../ErrorScreen/template';
import { iconConverter } from '../../utils/iconsConverter';

export const RootScreen = ({ weatherRequest, locationRequest, globalLoading }) => {
  if (globalLoading) {
    return <MyLoader />
  }

  if (weatherRequest.error || true) { 
    return <ErrorScreen></ErrorScreen>
  }

  const formatTemp = (temp) => {
    return String(temp).split(".")[0];
  }

  const formatVisibility = (value) => {
    const strValue = String(value);
    return strValue.slice(0, 2);
  }

  const icon = weatherRequest.data.weather[0].icon;
  const image = backgroundConverter[icon];

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.hiddenContainer}>
          <HeaderCard
            country={weatherRequest.data.sys.country}
            city={weatherRequest.data.name}
            temp={formatTemp(weatherRequest.data.main.temp)}
            mainWeather={weatherRequest.data.weather[0].main}
            descriptionWeather={weatherRequest.data.weather[0].description}
          >
            <View>
              <IconImage icon={iconConverter[icon]} />
            </View>  
          </HeaderCard>
          <View>
            <Button></Button>
            <CardWeather
              humidity={`${weatherRequest.data.main.humidity}%`}
              visibility={`${formatVisibility(weatherRequest.data.visibility)}KM`}
              wind={`${weatherRequest.data.wind.speed}KM/H`}
            ></CardWeather>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}