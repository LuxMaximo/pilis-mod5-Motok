import React, { useContext } from 'react'
import { View, ScrollView, Image, Text, _Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { styles } from './DetalleEventoScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { UserContext } from '../../context/UserContext'

export const DetalleEventoScreen = ({ route }) => {
  const { item } = route.params

  const { currentUser } = useContext(UserContext)

  const images = {
    'Tuning2.jpg': require('../../../Assets/imgApi/Tuning2.jpg'),
    'LKOMC.webp': require('../../../Assets/imgApi/LKOMC.webp'),
    'Tuning.webp': require('../../../Assets/imgApi/Tuning.webp'),
    'Akropolis.webp': require('../../../Assets/imgApi/Akropolis.webp'),
    'gorras.jpg': require('../../../Assets/imgApi/gorras.jpg'),
    // Add more images as needed
  };

  const latitude = item.ubicacion[0]?.latitud;
  const longitude = item.ubicacion[0]?.longitud;


  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView horizontal pagingEnabled style={styles.imageContainer}>
          {item.imagen.map((imagen) => {
            const imageSource = images[imagen];
            return (
              imageSource ? (
                <Image
                  key={item.id}
                  source={imageSource}
                  style={styles.image}
                  resizeMode='cover'
                />) : null)
          })}

        </ScrollView>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text key={item.id} style={styles.location}>{item.ubicacion[0]?.lugar}</Text>
        <View>

          <Text style={styles.price}><Ionicons name='wallet' size={20} color={COLORS.primary} /> $ {item.precio}</Text>

        </View>

        <View style={styles.ratingContainer}>
          <Ionicons name='star' size={20} color={COLORS.primary} /><Ionicons name='star' size={20} color={COLORS.primary} /><Ionicons name='star' size={20} color={COLORS.primary} />
        </View>
        {currentUser ?
          <View>
            <Text>{item.hora}</Text>
            <Text>{item.fecha}</Text>
          </View> : <View></View>
        }
        <Text style={styles.description}>{item.descripcion}</Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude || 0,
          longitude: longitude || 0,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude || 0,
            longitude: longitude || 0
          }}
          title={item.titulo}
        />
      </MapView>
    </ScrollView>
  )
}