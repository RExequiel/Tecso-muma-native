import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/Auth/Login/LoginScreen";
import RegisterScreen from "../screens/Auth/Register/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar Sesión" }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Registro" }} />
    </Stack.Navigator>
  );
}
