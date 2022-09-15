import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { iconConverter } from '../../utils/iconsConverter';

const Index = ({ icon }) => {
  const path = iconConverter[icon];
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={path}
      />
    </View>
  );
}

export default Index