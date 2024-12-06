import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE, COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 500,
    justifyContent: 'center',
    top: 100
  },
  title: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: 'bold',
    color: COLORS.white,
    width: '75%',
    marginLeft: 25
  }
})
