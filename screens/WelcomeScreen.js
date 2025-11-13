import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.myText}>This is the Welcome Screen</Text>
      <Button
        title="Go to Favorites"
        onPress={() => navigation.navigate("Favorites")}
      />
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
  myText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
