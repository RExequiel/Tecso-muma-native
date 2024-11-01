import React from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import sectionImg from '../../../assets/Asset01.png';
import UserMascotero from '../../../assets/UserMascotero.png';
import UserProtectors from '../../../assets/UserProtectors.png';
import asset1 from '../../../assets/Asset4x.png';
import asset from '../../../assets/Asset-blanco4x.png';
import { useNavigation } from "@react-navigation/native";
import { styles } from './UserSelectionStyle';

const SelectionUsuario = () => {

  const navigation = useNavigation();

  return (
    <>
        <View style={styles.container}>
            <Image
            source={sectionImg} 
            style={styles.backgroundImage} 
            resizeMode="contain"
            />

            <View style={styles.imageContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("")}>
                    <Image 
                        source={UserMascotero} 
                        style={styles.overlayImage} 
                        resizeMode="contain"
                    />
                    <Image 
                    source={asset1}
                    style={styles.imageAsset} 
                    resizeMode="contain"
                    />
                    <Text style={styles.imageText}>Mascotero</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer1}>
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Image 
                        source={UserProtectors} 
                        style={styles.overlayImage1} 
                        resizeMode="contain"
                    />
                    <Image 
                    source={asset} 
                    style={styles.imageAsset1} 
                    resizeMode="contain"
                    />
                    <Text style={styles.imageText1}>Protectora</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
  );
}

export default SelectionUsuario;