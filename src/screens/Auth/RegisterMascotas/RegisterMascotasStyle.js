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
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginVertical: 10,
      },

    imagePicker: {
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        borderWidth: 1,
        margin: 5,
        borderColor: "#F08318",
        paddingVertical: 12,
    },

    button: {
        borderRadius: 4,
        borderWidth: 1,
        alignItems: 'center',
        margin: 5,
        marginBottom: 20,
        height: 50,
        backgroundColor: '#F08318',
        borderColor: "#F08318",
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

    imgPr: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    }

});
