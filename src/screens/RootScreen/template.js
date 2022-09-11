import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { CardWeather, HeaderCard } from '../../components';
import { styles } from './styles';
import image from '../../../assets/weatherImages/thunderstorm.jpeg';
import AppLoading from 'expo-app-loading';


export const RootScreen = ({ weatherRequest, locationRequest, globalLoading }) => {

  if (globalLoading) {
    return <AppLoading />
  }


  console.log(weatherRequest.data.data);

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

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.hiddenContainer}>
          <HeaderCard
            country={weatherRequest.data.data.sys.country}
            city={weatherRequest.data.data.name}
            temp={formatTemp(weatherRequest.data.data.main.temp)}
            mainWeather={weatherRequest.data.data.weather[0].main}
            descriptionWeather={weatherRequest.data.data.weather[0].description}
          ></HeaderCard>
          <CardWeather
            humidity={`${weatherRequest.data.data.main.humidity}%`}
            visibility={`${formatVisibility(weatherRequest.data.data.visibility)}KM`}
            wind={`${weatherRequest.data.data.wind.speed}KM/H`}
          ></CardWeather>
        </View>
      </ImageBackground>
    </View>
  )
}