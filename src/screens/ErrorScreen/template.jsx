import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { IconImage } from '../../components';

export const ErrorScreen = ({}) => {

  const imageBackground = require("../../../assets/status/errorScreen.jpg");
  const errorIcon = require("../../../assets/status/error.png");

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
        <View style={styles.center}>
          <IconImage styles={stylesImage} icon={errorIcon}></IconImage>
          <View style={ styles.spacing}>
            <Text style={styles.textLabel}>Sua internet aparentemente não esta funcionando</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const stylesImage = StyleSheet.create({
  container: {}
});