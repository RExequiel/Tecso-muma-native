import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import StartedScreen from "../components/startedScreen/startedScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import RegisterMascotas from "../screens/Auth/RegisterMascotas/RegisterMascotas";
import SuccesScreen from "../screens/Auth/RegisterMascotas/SuccesScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => { 
      const token = await AsyncStorage.getItem('accessToken'); //Guarda el token
      setIsLoggedIn(!!token); // Establece el estado según si hay un token o no
    };

    checkLoginStatus();
  }, []);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        // Si está logueado
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
          <Stack.Screen name="RegisterMascotas" component={RegisterMascotas} options={{ title: "Registrar Mascotas" }} />
          <Stack.Screen name="SuccesScreen" component={SuccesScreen} options={{ title: "Agregaste una Mascota" }} />
        </>
      ) : (
        // Si no está logueado, mostrar las pantallas de autenticación
        <>
          <Stack.Screen name="Started" component={StartedScreen} options={{ title: "Bienvenido", headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar Sesión" }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Registro" }} />
        </>
      )}
    </Stack.Navigator>
  );
}
