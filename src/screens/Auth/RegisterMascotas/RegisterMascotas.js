import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import protectorasService from '../../../services/protectorasService';
import MumaLogo from '../../../../assets/icon.png';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from './RegisterMascotasStyle';
import { TouchableOpacity } from "react-native";

const validationSchema = Yup.object().shape({
  nombre: Yup.string().required("El Nombre es requerido"),
  raza: Yup.string().required("La Raza es requerida"),
  sexo: Yup.string().required("El Sexo es requerido"),
  tamano: Yup.string().required("El Tamaño es requerido"),
  mesAnioNacimiento: Yup.string().required("La Fecha es requerida"),
  estado: Yup.string().required("El Estado es requerido"),
  temperamentoConAnimales: Yup.string().required("El Comportamiento con animales es requerido"),
  temperamentoConPersonas: Yup.string().required("El Comportamiento con personas es requerido"),
  protectora: Yup.string().required("La Protectora es requerida"),
});

const RegisterMascota = () => {
    const [protectoras, setProtectoras] = useState([]);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProtectoras = async () => {
          try {
            const response = await protectorasService.getProtectoras();
            setProtectoras(response);
            console.log("dato protectora:", protectoras, response)
          } catch (error) {
            console.error("Error al cargar las protectoras:", error);
          }
        };
    
        fetchProtectoras();
      }, []);

      console.log("datos 2:", protectoras)

  // Selección de imagen
  const handleImageChange = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImagePreview(response.assets[0].uri); // Guarda la URL de la imagen para previsualización
      }
    });
  };

  const handleMascotaSubmit = async (values) => {
    setLoading(true);
    try {
      const mascotaData = {
        nombre: values.nombre,
        tipoAnimal: values.tipoAnimal,
        raza: values.raza,
        sexo: values.sexo,
        tamano: values.tamano,
        mesAnioNacimiento: values.mesAnioNacimiento,
        estado: values.estado,
        temperamentoConAnimales: values.temperamentoConAnimales,
        temperamentoConPersonas: values.temperamentoConPersonas,
        protectoraId: values.protectoraId,
        provincia: values.provincia,
        ciudad: values.ciudad,
        descripcion: values.descripcion,
        fotos: imagePreview ? [{ uri: imagePreview }] : [], // se agrega la imagen
      };

      const response = await mascotasService.registerMascota(mascotaData);
      if (response.Mascota) {
        // Redirigir
      }
    } catch (error) {
      console.error("Error al registrar la mascota:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>

        <View style={styles.logoContainer}>
            <Image 
            source={MumaLogo}
            style={styles.imageLogo}
            />
        </View>

        <Formik
            initialValues={{
                nombre: "",
                tipoAnimal: "",
                raza: "",
                sexo: "",
                tamano: "",
                mesAnioNacimiento: "",
                estado: "",
                temperamentoConAnimales: "",
                temperamentoConPersonas: "",
                protectoraId: "",
                provincia:"",
                ciudad: "",
                descripcion: "",
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting }) => {
                handleMascotaSubmit(values);
                setSubmitting(false);
            }}
            >
        {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
            <>
            <TextInput
                style={styles.input}
                placeholder="Nombre de la Mascota*"
                value={values.nombre}
                onChangeText={handleChange('nombre')}
            />
            {errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Tipo mascota*"
                value={values.tipoAnimal}
                onChangeText={handleChange('tipoAnimal')}
            />
            {errors.tipoAnimal && <Text style={styles.errorText}>{errors.tipoAnimal}</Text>}

            <TextInput
                selectedValue={values.raza}
                placeholder="Ingrese la Raza*"
                style={styles.input}
                onValueChange={handleChange('raza')}
            />
            {errors.raza && <Text style={styles.errorText}>{errors.raza}</Text>}

            <TextInput
                selectedValue={values.sexo}
                placeholder="Ingrese el Sexo*"
                style={styles.input}
                onValueChange={handleChange('sexo')}
            />
            {errors.sexo && <Text style={styles.errorText}>{errors.sexo}</Text>}

            <TextInput
                selectedValue={values.tamano}
                placeholder="Ingrese el Tamaño*"
                style={styles.input}
                onValueChange={handleChange('tamano')}
            />
            {errors.tamano && <Text style={styles.errorText}>{errors.tamano}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Fecha de Nacimiento*"
                value={values.mesAnioNacimiento}
                onChangeText={handleChange('mesAnioNacimiento')}
            />
            {errors.mesAnioNacimiento && <Text style={styles.errorText}>{errors.mesAnioNacimiento}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Ingrese Estado*"
                value={values.estado}
                onChangeText={handleChange('estado')}
            />
            {errors.estado && <Text style={styles.errorText}>{errors.estado}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Temperamento con Animales*"
                value={values.temperamentoConAnimales}
                onChangeText={handleChange('temperamentoConAnimales')}
            />
            {errors.temperamentoConAnimales && <Text style={styles.errorText}>{errors.temperamentoConAnimales}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Temperamento con Personas*"
                value={values.temperamentoConPersonas}
                onChangeText={handleChange('temperamentoConPersonas')}
            />
            {errors.temperamentoConPersonas && <Text style={styles.errorText}>{errors.temperamentoConPersonas}</Text>}

            <Picker
                selectedValue={values.protectoraId}
                style={styles.input}
                onValueChange={handleChange('protectoraId')}
            >
                <Picker.Item label="Selecciona una Protectora" value="" />
                {protectoras.map((protectora) => (
                <Picker.Item key={protectora.id} label={protectora.nombreProtectora} value={protectora.nombreProtectora} />
                ))}
            </Picker>
            {errors.protectoraId && <Text style={styles.errorText}>{errors.protectoraId}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Provincia*"
              value={values.descripcion}
              onChangeText={handleChange('provincia')}
            />

            <TextInput
              style={styles.input}
              placeholder="Ciudad*"
              value={values.descripcion}
              onChangeText={handleChange('ciudad')}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese Descripción*"
                value={values.descripcion}
                onChangeText={handleChange('descripcion')}
            />

            <TouchableOpacity style={styles.imagePicker} onPress={handleImageChange}>
                <Text style={styles.imagePickerText}>Seleccionar Imagen</Text>
            </TouchableOpacity>
            {imagePreview && <Image source={{ uri: imagePreview }} style={styles.imagePreview} />}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
                <Text style={styles.buttonText}>{loading ? "Cargando..." : "Registrar Mascota"}</Text>
            </TouchableOpacity>
        </>
        )}
        </Formik>
    </ScrollView>
  );
};

export default RegisterMascota;