import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';

const Index = () => {
  return (
    <TouchableOpacity style={ styles.pressableSpace}>
      <View style={styles.container}>
        <Text style={styles.labelText}>Update</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Index