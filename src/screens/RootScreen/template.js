import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { CardWeather, HeaderCard } from '../../components';
import { styles } from './styles';
import image from '../../../assets/weatherImages/thunderstorm.jpeg';

export const RootScreen = () => {


  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.hiddenContainer}>
          <HeaderCard></HeaderCard>
          <CardWeather></CardWeather>
        </View>
      </ImageBackground>
    </View>
  )
}