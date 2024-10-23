import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import StartedScreen from "../components/startedScreen/startedScreen";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => { 
      const token = await AsyncStorage.getItem('accessToken'); //Guarda el token
      setIsLoggedIn(false); // Establece el estado según si hay un token o no
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    // componente splash para mostrar loading
    return null;
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        // Si está logueado, ir directamente al Home
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
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
