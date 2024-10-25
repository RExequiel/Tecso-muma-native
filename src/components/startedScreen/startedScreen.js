import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./startedStyle";

// Obtiene el ancho de la pantalla
const { width } = Dimensions.get('window');

// Datos de las imágenes y textos
const slides = [
  {
    id: '1',
    title: 'Se parte del equipo',
    description: 'Ayudalos a volver a casa difundiendo\nInformación y colaborando con las\nprotectoras para encontrarles un hogar.',
    image: require('../../../assets/Separtedelequipo.png'),
  },
  {
    id: '2',
    title: 'Encontrá tu mejor amigo',
    description: 'Si estás pensando en sumar\nun integrante más a tu familia\n¿Por qué no adoptando?',
    image: require('../../../assets/Encontrátumejoramigo.png'),
  },
];

const StartedScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();

  // Función para ir al siguiente slide
  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentSlide + 1 });
      setCurrentSlide(currentSlide + 1);
    }
  };

  // Renderiza cada slide
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Slideshow usando FlatList */}
      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        onScroll={(e) => {
          const slideIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentSlide(slideIndex);
        }}
      />

      <View style={styles.buttonsContainer}>
        {currentSlide === 0 && (
          <TouchableOpacity style={styles.button} onPress={goToNextSlide}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        )}
        
        {currentSlide === 1 && (
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Comenzar</Text>
          </TouchableOpacity>
        )}
        
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skipText}>Omitir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartedScreen;
