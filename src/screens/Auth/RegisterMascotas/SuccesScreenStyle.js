import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        flex: 1,
    },
    image: {
        marginTop: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 5,
        width: 250,
        height: 250,
    },
    dogSuccess: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    message: {
        fontSize: 14,
        textAlign: 'center',
    },

    button: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#F08318',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 15,
        width: 100,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
    }
});