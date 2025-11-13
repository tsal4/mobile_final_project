import React from "react";
import { View, Text, StyleSheet, } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>This is where your favorite food Resources will go</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
