import React from "react";
import { StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { globalStyles } from "../theme/styles";
import Card from "../components/Card";
import { githubCard } from "../data/socials";

const Repo = () => {
  return (
    <View style={globalStyles.body}>
      <Card
        title={githubCard.title}
        imageSource={githubCard.image}
        bodyText={githubCard.description}
      />
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
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
