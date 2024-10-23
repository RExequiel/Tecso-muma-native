import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.medium,
  },
  input: {
    height: 50,
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
});
