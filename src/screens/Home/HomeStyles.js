import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../../theme/theme";

export const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: spacing.small,
    marginTop: spacing.small,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: spacing.small,
    height: 40,
  },
  searchButton: {
    backgroundColor: colors.primary,
    padding: spacing.small,
    marginLeft: spacing.small,
    borderRadius: 5,
  },
  categoryContainer: {
    padding: spacing.medium,
  },
  categoryList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryButton: {
    backgroundColor: colors.background,
    padding: spacing.small,
    margin: spacing.small,
    borderRadius: 5,
  },
  title: {
    fontSize: typography.fontSizeLarge,
    fontWeight: "bold",
    marginBottom: spacing.small,
    color: colors.text,
  },
  animalsContainer: {
    padding: spacing.medium,
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: spacing.small,
  },
  cardText: {
    fontSize: typography.fontSizeMedium,
    color: colors.text,
  },
  floatingButton: {
    position: "absolute",
    bottom: spacing.large,
    right: spacing.large,
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
