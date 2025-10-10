import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles";

const Navbar: React.FC<{ setDisplayMyQR: (value: boolean) => void }> = ({
  setDisplayMyQR,
}) => {
  return (
    <View style={styles.navbarContainer}>
      <Text style={styles.navbarTitle}>My Portfolio App</Text>
      <View style={styles.navbarButtonsContainer}>
        <Pressable
          style={styles.navbarButton}
          onPress={() => setDisplayMyQR(true)}
        >
          <Text
            style={{
              ...{
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
              },
              ...globalStyles.shadoxboxing,
            }}
          >
            Mi info
          </Text>
        </Pressable>
        <Button
          onPress={() => setDisplayMyQR(false)}
          title="Mi Repo"
          color="light-gray"
          accessibilityLabel="Un botón pal QR"
        />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  navbarTitle: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  navbarButtonsContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarButton: {
    width: "50%",
  },
});
