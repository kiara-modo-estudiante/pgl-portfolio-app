import React from "react";
import Card from "../components/Card";
import List from "../components/List";
import { View } from "react-native";
import { globalStyles } from "../styles";
import { aboutMeCard } from "../data/AboutMe";

const AboutMe = () => {
  return (
    <View style={globalStyles.body}>
      <Card
        title={aboutMeCard.title}
        imageSource={aboutMeCard.image}
        bodyText={aboutMeCard.description}
      />
      <List />
    </View>
  );
};

export default AboutMe;
