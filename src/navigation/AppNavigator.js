import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from "./AuthNavigator";
import HomeScreen from "../screens/Home/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
    </Stack.Navigator>
  );
}
