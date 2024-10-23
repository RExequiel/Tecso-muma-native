import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    slide: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#F08318',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    skipText: {
        color: '#F08318',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
  });
