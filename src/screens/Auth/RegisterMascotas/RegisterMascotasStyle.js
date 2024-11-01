import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        // Centra el contenido en la página
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Asegura que ocupe toda la altura de la ventana
    },

    input: {
        backgroundColor: '#fafafa',
        height: 45,
        margin: 5,
        color: 'black',
        // Hacer el input más responsivo
        width: '100%', // Ocupa el 100% del contenedor
        maxWidth: 400, // Máximo ancho del input
        borderRadius: 4, // Bordes redondeados
        paddingHorizontal: 10, // Añadir algo de padding
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
        width: '100%', // Ocupa el 100% del contenedor
        maxWidth: 400, // Máximo ancho del botón
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
        width: '100%', // Ocupa el 100% del contenedor
        maxWidth: 400, // Máximo ancho del botón
    },

    buttonText: {
        color: '#ffffff',
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
