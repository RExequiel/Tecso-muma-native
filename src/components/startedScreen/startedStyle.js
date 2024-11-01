import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        flexDirection: 'row',
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,
        marginLeft: 40,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
    },
    buttonsContainer: {
        position: 'absolute',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#F08318',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 20,
        marginBottom: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    skipText: {
        color: '#F08318',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
  });
