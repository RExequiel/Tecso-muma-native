import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SuccesScreenStyle'

const Success = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.success}>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../../../../assets/Group75.png')}
                        style={styles.dogSuccess}
                    />
                </View>
                <Text style={styles.title}>Listo!</Text>
                <Text style={styles.message}>Agregaste una nueva mascota con éxito.
                    Entre todos podemos encontrarles un hogar</Text>
                <TouchableOpacity
                title="Ir al login"
                onPress={() => navigation.navigate("SuccesMascota")} />
            </View>
        </View>
    );
};


export default Success;
