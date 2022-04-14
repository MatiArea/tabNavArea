import { COLORS } from '../../constants/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerDisabled: {
    flex: 1,
    opacity: 0.5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.color1,
    paddingVertical: 10,
  },
  messageText: {
    color: COLORS.color3,
    fontSize: 12,
    marginVertical: 5,
  },
})
