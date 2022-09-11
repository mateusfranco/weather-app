import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  temperatureText: {
    fontSize: 110,
    color: '#F2F2F2',
    fontFamily: 'Montserrat_400Regular',
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 16,
    color: '#F2F2F2',
    fontFamily: 'Montserrat_600SemiBold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowEnd: {
    alignItems: 'flex-end'
  }
});