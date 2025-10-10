import React from "react";
import Card from "../components/Card";
import List from "../components/List";
import { View } from "react-native";
import { globalStyles } from "../styles";

const AboutMe = () => {
  return (
    <View style={globalStyles.body}>
      <Card />
      <List />
    </View>
  );
};

export default AboutMe;
