import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './SuccesScreenStyle';

const SuccesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image 
                    source={require('../../../../assets/Group75.png')}
                    style={styles.imageContainer}
                />
            </View>
            <Text style={styles.title}>Listo!</Text>
            <Text style={styles.message}>Agregaste una nueva mascota con éxito.</Text>
            <Text style={styles.message}>Entre todos podemos encontrarles un hogar</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Ir a la home
                </Text>
            </TouchableOpacity>
        </View>
    );
};


export default SuccesScreen;
