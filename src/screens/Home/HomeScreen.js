import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./HomeStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la App</Text>
      <Button title="Cerrar Sesión" onPress={() => navigation.replace("Auth")} />
    </View>
  );
}
