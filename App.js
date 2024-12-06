import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { UserProvider } from './src/context/UserContext';
import { MainStackScreen } from './src/pantallas/MainStack/MainStackScreen';
import { DetalleEventoScreen } from './src/pantallas/DetalleEventos/DetalleEventoScreen';
import React from 'react';
import "reflect-metadata"

const LocationListStack = createNativeStackNavigator()

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
          {/* //Pantallas con Tab */}
          <LocationListStack.Screen name='Main' component={MainStackScreen} />
          {/* //Pantallas sin Tab */}
          <LocationListStack.Screen name='DetalleEvento' component={DetalleEventoScreen} />
        </LocationListStack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
/**
 * <LocationListStack.Screen name='LocationDetail' component={LocationDetailScreen} />
            <LocationListStack.Screen name='LocationDetailWeb' component={LocationDetailWebScreen} />
 */
