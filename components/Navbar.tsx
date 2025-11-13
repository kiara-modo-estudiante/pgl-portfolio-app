import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { lightColorPalette } from "../theme/styles";

export default function Navbar() {
  const router = useRouter();

  return (
    <View style={styles.navbarContainer}>
      <Text style={styles.navbarTitle}>My Portfolio App</Text>
      <View style={styles.navbarButtonsContainer}>
        <Pressable style={styles.navbarButton} onPress={() => router.push("/")}>
          <Text style={styles.navbarText}>Mi info</Text>
        </Pressable>
        <Pressable
          style={styles.navbarButton}
          onPress={() => router.push("/repo")}
        >
          <Text style={styles.navbarText}>Mi Repo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  navbarTitle: {
    backgroundColor: lightColorPalette.primary,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
    padding: 8,
  },
  navbarButtonsContainer: {
    flexDirection: "row",
    backgroundColor: lightColorPalette.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  navbarButton: {
    width: "50%",
    padding: 10,
  },
  navbarText: {
    color: lightColorPalette.text,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
