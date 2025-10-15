import { StyleSheet } from "react-native";
import { THEME } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GRAY_600,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 32,
  },
  title: {
    fontSize: THEME.FONT_SIZE.XL,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.WHITE,
    textAlign: "center",
  },
  subtitle: {
    color: THEME.COLORS.GRAY_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    textAlign: "center",
    marginBottom: 32,
  },
});
