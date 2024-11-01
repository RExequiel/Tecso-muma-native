import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";
import StartedScreen from "../components/startedScreen/startedScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import RegisterMascotas from "../screens/Auth/RegisterMascotas/RegisterMascotas";
import SuccesScreen from "../screens/Auth/RegisterMascotas/SuccesScreen";
import SplashScreen from "../components/splashScreen/splashScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      // Retrasar la verificación de login para mostrar el SplashScreen por unos segundos
      setTimeout(async () => {
        const token = await AsyncStorage.getItem('accessToken');
        setIsLoggedIn(!!token);
        setIsLoading(false); // Ocultar el splash después del retraso
      }, 2500); // Retraso de 2 segundos
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    // Muestra SplashScreen mientras se carga el estado de inicio de sesión
    return <SplashScreen />;
  }

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
