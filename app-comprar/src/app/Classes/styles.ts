import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214", // fundo escuro
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#A9A9A9",
    marginBottom: 32,
  },
  listContainer: {
    width: "100%",
    gap: 12,
    flexGrow: 1,
  },
  classCard: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202024", // cartão escuro
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  classIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: "#00B37E", // verde suave
  },
  className: {
    fontSize: 16,
    color: "#E1E1E6",
  },
});
