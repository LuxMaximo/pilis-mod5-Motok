import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../Assets/imgApi/LogoLocal.jpg')}>

      </ImageBackground>

    </SafeAreaView>
  )
}
/*        <Text style={styles.title}>
          Mira los mejores eventos del Norte!
        </Text>*/