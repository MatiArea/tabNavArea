import { COLORS } from '../../constants/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  header: {
    flex: 1,
  },
  date: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: COLORS.color2,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
