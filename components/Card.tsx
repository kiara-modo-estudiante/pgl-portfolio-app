import React from "react";
import { Image, Text, View } from "react-native";
import { lightColorPalette } from "../styles";
import { StyleSheet } from "react-native";
import { cardInfo } from "../data/AboutMe";

const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={cardInfo.image} />
      <View style={styles.card}>
        <Text style={styles.title}>{cardInfo.title}</Text>
        <Text>{cardInfo.description}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  card: {
    margin: 10,
    backgroundColor: lightColorPalette.secondary,
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});
