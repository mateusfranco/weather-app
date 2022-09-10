import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 80,
    backgroundColor: 'rgba(175, 210, 239, 0.2)',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalScroll: {
    flexDirection: 'row',
  },
  centered: {
    paddingTop: 20,
    alignItems: 'center',
  },
  miniCard: {
    container: {
      height: 80,
      flex: 1,
    },
  },
  textInfo: {
    color: '#F2F2F2',
    fontFamily: 'Montserrat_600SemiBold',
  }
});