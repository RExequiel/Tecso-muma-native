import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SuccesScreenStyle';

const SuccesScreen = () => {
    const navigation = useNavigation();

    return (
        <View 
            style={{
                backgroundColor: "#FFFFFF",
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={{
            }}>
                <View style={{
                    alignItems: 'center',
                    marginBottom: 20,
                }}>
                    <Image 
                        source={require('../../../../assets/Group75.png')}
                        style={{
                            width: 550,
                            height: 550,
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 10,
                }}>Listo!</Text>
                <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 5,
                }}>Agregaste una nueva mascota con éxito.</Text>
                    <Text style={{
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 20,
                }}>Entre todos podemos encontrarles un hogar</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={{
                        backgroundColor: '#F08318',
                        paddingVertical: 15,
                        borderRadius: 10,
                        marginBottom: 15,
                    }}>Ir a la home</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default SuccesScreen;
