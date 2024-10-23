import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from "./AuthNavigator";
import HomeScreen from "../screens/Home/HomeScreen";
import SelectionUser from "../screens/UserSelection/UserSelection";
import RegisterMascotas from "../screens/Auth/RegisterMascotas/RegisterMascotas";
import SuccesMascota from "../screens/Auth/RegisterMascotas/SuccesScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
      <Stack.Screen name="SelectionUser" component={SelectionUser} options={{ title: "Seleccion de Usuario" }} />
      <Stack.Screen name="RegisterMascotas" component={RegisterMascotas} options={{ title: "Registrar Mascotas" }} />
      <Stack.Screen name="SuccesMascota" component={SuccesMascota} options={{ title: "Succes Mascota" }} />
    </Stack.Navigator>
  );
}
