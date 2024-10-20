import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./LoginStyles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de inicio de sesión
    navigation.replace("Home"); // Navegar a la pantalla Home
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Ingresar" onPress={handleLogin} />
      <Button title="Registrarse" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
