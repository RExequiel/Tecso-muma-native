import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, Image, TouchableOpacity, ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { Badge, Card } from "@rneui/base"; 
import mascotasService from "../../services/mascotasService";
import { styles } from "./HomeStyles";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = ["Gato", "Perro", "Hamster", "Conejo"];

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await mascotasService.getMascotas();
        setMascotas(response);
        setLoading(false);
      } catch (err) {
        console.error("Error al cargar las mascotas. Por favor, intenta de nuevo.", err);
        setLoading(false);
      }
    };

    fetchMascotas();
  }, []);

  if (loading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <ScrollView>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Nombre; estado, protectora y sexo" />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <Text style={styles.title}>Categorías</Text>
        <View style={styles.categoryList}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.animalsContainer}>
        <Text style={styles.title}>Animales</Text>
        <FlatList
          data={mascotas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card>
              <Card.Title>{item.nombre}</Card.Title>
              <Card.Image source={{ uri: item.fotos[0] }} />
              <View style={styles.cardBody}>
                <Text style={styles.cardText}>{item.ciudad}</Text>
                <Badge value={item.sexo === "Macho" ? "♂" : "♀"} status={item.sexo === "Macho" ? "primary" : "error"} />
              </View>
              <Button title="Editar" color="#F08318" onPress={() => {}} />
            </Card>
          )}
          ListEmptyComponent={<Text>No hay animales registrados actualmente</Text>}
        />
      </View>

      {/* Botón flotante */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate("RegisterMascotas")} >
        <Icon name="plus" size={25} color="white"/>
      </TouchableOpacity>
    </ScrollView>
  );
};



export default HomeScreen;
