import { COLORS } from '../../constants/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  list: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexGrow: 0.1,
    borderTopColor: COLORS.color1,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  total: {
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
    padding: 8,
    color: '#212121',
  },
  totalPrice: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    padding: 8,
    color: COLORS.color1,
  },
})
