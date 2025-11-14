import React from "react";
import { TouchableOpacity, Image, View, Button, Text, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }) {
  const handlePressGetStarted = () => {
    console.log('Get Started pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_placeholder.jpg')} style={styles.image} />
      <Text style={styles.bigText}>Welcome to NourishNet!</Text>
      <Text style={styles.description}>
        NourishNet is your guide to finding food assistance in your area. Press the Get Started button to enable your location and start finding food assistance near you.
      </Text>
      <Button
        title="Go to Favorites"
        onPress={() => navigation.navigate("Favorites")}
      />
      <Button
        title="Find Food Nearby"
        onPress={() => navigation.navigate("FoodNearby")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("LocationPermission")} style={styles.button}>
        <Text style={styles.buttonText}>{"Get Started"}</Text>
      </TouchableOpacity>
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
  bigText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: '#259AF4',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  }
});