import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { globalStyles } from "../styles";

const Repo = () => {
  return (
    <View style={globalStyles.body}>
      <View style={styles.qrCode}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
};

export default Repo;

const styles = StyleSheet.create({
  qrCode: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
