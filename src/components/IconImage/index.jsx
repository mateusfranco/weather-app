import { View, Text, Image } from 'react-native'
import React from 'react'
import { stylesComponent } from './styles';

const Index = ({ icon, styles }) => {
  
  return (
    <View style={styles?.container || stylesComponent.container }>
      <Image
        style={stylesComponent.tinyLogo}
        source={icon}
      />
    </View>
  );
}

export default Index