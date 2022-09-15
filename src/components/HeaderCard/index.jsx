import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Index = ({country, city, state, mainWeather, descriptionWeather, temp, children }) => {
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
      <View style={styles.row}>
        <Text style={styles.temperatureText} >{temp}°</Text>
        <View style={styles.rowEnd}>
          {children}
        </View>
      </View>
    </View>
  )
}

export default Index