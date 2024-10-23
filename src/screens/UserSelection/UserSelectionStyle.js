import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
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
        width: 150,
        height: 150,
    },
    imageText: {
        fontSize: 18,
        width: 90,
        height: 24,
    },
    imageAsset: {
        position: 'absolute',
        width: 90,
        height: 90,
        bottom: 60,
        left: 100,
    },
    imageAsset1: {
        position: 'absolute',
        width: 90,
        height: 90,
        top: 20,
        right: 140,
    }
});
