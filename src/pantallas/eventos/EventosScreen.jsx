import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './EventosScreen.styles'
import { SearchBar } from '../../components/BuscadorBar/Buscador.jsx'
import { getEvents } from '../../api/data'

const images = {
  'Tuning2.jpg': require('../../../Assets/imgApi/Tuning2.jpg'),
  'LKOMC.webp': require('../../../Assets/imgApi/LKOMC.webp'),
  'Tuning.webp': require('../../../Assets/imgApi/Tuning.webp'),
  'Akropolis.webp': require('../../../Assets/imgApi/Akropolis.webp'),
  'gorras.jpg': require('../../../Assets/imgApi/gorras.jpg'),
  // Add more images as needed
};


export const EventosScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [eventList, setEventList] = useState([])


  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const filteredEvents = eventList.filter(e => (
    e.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  ))


  useEffect(() => {
    getEvents()
      .then(data => {
        console.log(`EventoScreen.UseEffect.dato: ${data}`)


        setEventList(data)
      })
      .catch(err => console.log(err))
  }, [])

  const evento = ({ item }) => {

    const imagePath = `../../../Assets/imgApi/${item.imagen[0]}`;
    const imageSource = images[item.imagen[0]] || null; // Get the image from the images object;

    return (<Pressable onPress={() => navigation.navigate('DetalleEvento', { item })}>


      <View style={styles.itemContainer}>

        {imageSource && (
          <Image
            source={imageSource}
            style={styles.itemImage} />
        )}
        <Text style={styles.itemTitle}>{item.titulo}</Text>
        <Text style={styles.itemPrice}>{item.descripcion}</Text>
      </View>
    </Pressable>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredEvents}
        renderItem={evento}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}