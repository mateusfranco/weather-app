import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Index = () => {
  return (
    <View>
      <Text style={ styles.title } >BRASIL</Text>
      <Text style={ styles.title } >RUSSAS - CEARA</Text>
      <Text style={ styles.temperatureText} >19°</Text>
    </View>
  )
}

export default Index