import React, { useContext } from 'react'
import { View, ScrollView, Image, Text, _Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './DetalleEventoScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
//import { Link } from '@react-navigation/native'
import { UserContext } from '../../context/UserContext'

export const DetalleEventoScreen = ({ route }) => {
  const { item } = route.params
  console.log(`DetalleEventoScreen.Item: ${item}`)
  console.log(`DetalleEventoScreen.Items.titulo: ${item.titulo}` )
  console.log(`DetalleEventoScreen.Items.urlimagen: ${item.imagen}` )
  const { currentUser } = useContext(UserContext)

   
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.imagen.map((imagen) => (
            <Image
              key={item.id}
              source={{ uri: imagen }}
              style={styles.image}
              resizeMode='cover'
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.location}>{item.ubicacion}</Text>
        <Text style={styles.price}>{item.lugar}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={COLORS.primary} />
          <Text style={styles.rating}>{item.hora}</Text>
        </View>
        {/*currentUser ? <View>
          <Text>{item.hora}</Text>
          <Text>{item.fecha}</Text></View>: <View></View>
        */}
        <Text style={styles.description}>{item.descripcion}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: item.ubicacion.latitud,
          longitude: item.ubicacion.longitud,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}
      >
        <Marker
          coordinate={{
            latitude: item.ubicacion.latitud,
            longitude: item.ubicacion.longitud
          }}
          title={item.titulo}
        />
      </MapView>
    </ScrollView>
  )/*
  <ScrollView>
  <View>
    <Image source={item.imagen}/>
  </View>
  </ScrollView>)*/
}
/*

*/
