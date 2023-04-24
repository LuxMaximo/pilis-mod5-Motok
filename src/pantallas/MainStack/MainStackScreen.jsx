import React from 'react'
import { StyleSheet } from 'react-native'
import { EventosScreen } from './../eventos/EventosScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../../utils/theme'
import { Ionicons ,AntDesign} from '@expo/vector-icons'
import { HomeScreen } from '../home/HomeScreen'
import { PerfilScreen } from '../perfil/PerfilScreen'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Home: 'home',
  Profile: 'person',
  Flag: 'flag' 
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]// TAB_ICON[Home]
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar

  }
}
export const MainStackScreen = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' options={{ title: 'Inicio' }} component={HomeScreen} />
      <Tab.Screen name= 'Flag'options={{title: 'Catalogo'}} component={EventosScreen}/>
      <Tab.Screen name='Profile' options={{ title: 'Perfil' }} component={PerfilScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
/** <Tab.Screen name='Search' options={{ title: 'Explorar' }} component={LocationListScreen} />
 * 
 */
