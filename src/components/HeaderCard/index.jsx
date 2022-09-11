import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Index = ({country, city, state, mainWeather, descriptionWeather, temp }) => {
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title} >{country}</Text>
          <Text style={styles.title} >{city} - {state}</Text>
        </View>
        <View style={styles.rowEnd}>
          <Text style={styles.title} >{mainWeather}</Text>
          <Text style={styles.title} >{descriptionWeather}</Text>
        </View>
      </View>
      <Text style={styles.temperatureText} >{temp}°</Text>
    </View>
  )
}

export default Index