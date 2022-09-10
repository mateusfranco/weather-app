import { Text, View, ScrollView } from 'react-native'
import React from 'react';
import { styles } from './styles';

const Minicard = ({ label, description }) => { 
  return (
    <View style={styles.miniCard.container}>
      <View style={styles.centered}>
        <Text style={styles.textInfo} >{label}</Text>
        <Text style={styles.textInfo} >{description}</Text>
      </View>
    </View>
  );
}

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontalScroll}>
        <Minicard label='58 %' description='humidity'></Minicard>
        <Minicard label='58 %' description='humidity'></Minicard>
        <Minicard label='58 %' description='humidity'></Minicard>
      </View>
    </View>
  )
}


export default Index;