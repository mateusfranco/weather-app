import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    opacity: 1,
  },
  container: {
    flexDirection: 'column',
    height: '100%',
  },
  center: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  textLabel: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 20,
  }
});