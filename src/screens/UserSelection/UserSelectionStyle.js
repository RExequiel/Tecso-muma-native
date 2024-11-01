import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative',
        overflow: 'hidden',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        paddingLeft: 70,
        marginBottom: 240,
    },
    imageContainer1: {
        alignItems: 'center',
        marginTop: 280,
        paddingRight: 110,
    },
    overlayImage: {
        top: 30,
        width: 130,
        height: 130,
        left: 10,
    },
    imageText: {
        fontSize: 18,
        width: 90,
        height: 24,
        left: 30,
        top: 30,
    },
    imageAsset: {
        position: 'absolute',
        width: 90,
        height: 90,
        bottom: 15,
        left: 30,
    },
    imageAsset1: {
        position: 'absolute',
        width: 90,
        height: 90,
        bottom: 90,
        left: 25,
    },
    overlayImage1: {
        width: 130,
        height: 130,
        left: 10,
        bottom: 40,
    },
    imageText1: {
        fontSize: 18,
        width: 90,
        height: 24,
        left: 32,
        bottom: 40,
    },
});
