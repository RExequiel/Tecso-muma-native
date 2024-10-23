import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
    },

    input: {
        backgroundColor: '#fafafa',
        height: 45,
        margin: 5,
        color: 'black',
    },

    imagePreview: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },

    imagePicker: {
        height: 60,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#fafafa',
    },

    button: {
        alignItems: 'center',
        margin: 5,
        marginBottom: 20,
        height: 80,
        backgroundColor: '#F08318',
    },

    buttonText: {
        paddingTop: 15,
    },

    logoContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imageLogo: {
        width: 150,
        height: 150,
        resizeMode: "contain",
        marginBottom: 50,
    },

});
