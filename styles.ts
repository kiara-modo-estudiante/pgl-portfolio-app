import { StyleSheet } from "react-native";

export const lightColorPalette = {
  primary: "#80A1BA",
  secondary: "#91C4C3",
  background: "#FFF7DD",
  text: "#333333",
  border: "#ffffff",
  accent: "#134686",
  lightGray: "#d3d3d3",
  darkGray: "#7f8c8d",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColorPalette.background,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: "85%",
  },
  list: {
    borderColor: lightColorPalette.border,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: lightColorPalette.text,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: lightColorPalette.lightGray,
  },
});
