import React from "react";
import { Button, Pressable, Text, View } from "react-native";
import { globalStyles } from "../styles";

const Navbar: React.FC<{ setDisplayMyQR: (value: boolean) => void }> = ({
  setDisplayMyQR,
}) => {
  return (
    <View style={globalStyles.topContainer}>
      <Text style={globalStyles.firsttoprowContainer}>My Portfolio App</Text>
      <View style={globalStyles.rowTopSecondContainer}>
        <Pressable
          style={globalStyles.buttonruta}
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
