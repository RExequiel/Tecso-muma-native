import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    success: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    dogSuccess: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
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
        marginBottom: 20,
    },
});