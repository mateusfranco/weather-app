import { View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { CardWeather, HeaderCard, IconImage } from '../../components';
import { styles } from './styles';
import { MyLoader } from './skeleton';
import { backgroundConverter } from '../../utils/backgroundConverter';

export const RootScreen = ({ weatherRequest, locationRequest, globalLoading }) => {
  console.log(globalLoading);
  if (globalLoading) {
    return <MyLoader />
  }

  const formatTemp = (temp) => {
    const mainTemp = temp.toLocaleString('pt-BR', {
      maximumFractionDigits: 0,
    });
    return mainTemp
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
              <IconImage icon={icon} />
            </View>  
          </HeaderCard>
          <CardWeather
            humidity={`${weatherRequest.data.main.humidity}%`}
            visibility={`${formatVisibility(weatherRequest.data.visibility)}KM`}
            wind={`${weatherRequest.data.wind.speed}KM/H`}
          ></CardWeather>
        </View>
      </ImageBackground>
    </View>
  )
}