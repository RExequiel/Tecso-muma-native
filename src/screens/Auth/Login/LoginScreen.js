import React from "react";
import * as Yup from "yup";
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authenticationService from "../../../services/authenticationService";
import { Formik } from "formik";
import { styles } from "./LoginStyles";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Debe ingresar un email válido")
    .required("Email es requerido"),
  password: Yup.string()
    .matches(/^\d+$/, "La contraseña debe ser numérica")
    .required("Contraseña es requerida"),
});

function Login() {
  const navigation = useNavigation();

  const handleSubmit = async (values) => {
    try {
      const response = await authenticationService.login(
        values.email,
        values.password
      );
      await AsyncStorage.setItem("accessToken", response.token);
      await AsyncStorage.setItem("refreshToken", response.refreshToken);
      if (response.token) {
        navigation.navigate("Home");
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit: formikHandleSubmit,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              style={[
                styles.input,
                touched.email && errors.email ? styles.inputError : null,
              ]}
              placeholder="Email*"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                touched.password && errors.password ? styles.inputError : null,
              ]}
              placeholder="Contraseña*"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity 
              disabled={isSubmitting} 
              style={styles.button} 
              onPress={formikHandleSubmit}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              disabled={isSubmitting} 
              style={styles.button} 
              onPress={() => navigation.navigate("Register")}>
              <Text style={styles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Login;
