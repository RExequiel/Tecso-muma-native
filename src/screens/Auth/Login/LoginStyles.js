import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },

  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: spacing.medium,
    paddingHorizontal: spacing.small,
  },

  inputError: {
    borderColor: "red",
  },

  errorText: {
    color: "red",
    marginBottom: spacing.small,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 5,
    marginBottom: spacing.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSizeMedium,
    textAlign: "center",
  },
  buttonPrimary: {
    justifyContent: "center",
    backgroundColor: "#F08318",
    alignItems: "center",
    marginTop: 10,
    height: 40,
    borderRadius: 4,
    paddingVertical: 12,
  },
  
  buttonSecondary: {
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginTop: 5,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#F08318",
    paddingVertical: 12,
  },
  
  buttonTextPrimary: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  
  buttonTextSecondary: {
    color: "#F08318",
    fontSize: 16,
  },

  logoContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  imageLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 15,
  },

  checkbox: {
    alignSelf: 'center',
  },

  label: {
    margin: 9,
  },

  button: {
    alignItems:'center',
    justifyContent:'left',
    paddingTop: 8,
  },

  buttonText: {
    color: 'blue',
    alignItems: 'center',
  }
});
