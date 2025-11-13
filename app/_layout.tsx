import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Navbar from "../components/Navbar";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <Slot />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});
