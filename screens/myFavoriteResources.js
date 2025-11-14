import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>

      {/* Example Favorite Card 1 */}  
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/GCFoodBank.jpg")}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Greater Cleveland Food Bank</Text>
          <Text style={styles.address}>13815 Coit Rd, Cleveland, OH 44110</Text>
          <Text style={styles.time}>Open ⋅ Closes 5PM</Text>
        </View>
      </View>

      {/* Example Resource Card 2 */}
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/heightsFoodCenter.webp")}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>West Side Food Bank</Text>
          <Text style={styles.address}>3663 Mayfield Rd, Cleveland Heights, OH 44121</Text>
          <Text style={styles.time}>Open ⋅ Closes 6PM</Text>
        </View>
      </View>

      {/* Example Favorite Card 3 */}
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../images/SRCDCHungerCenter.webp")}
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Start Right CDC Hunger Center</Text>
          <Text style={styles.address}>977 Caledonia Ave, Cleveland Heights, OH 44112</Text>
          <Text style={styles.time}>Open ⋅ Closes 4PM</Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 24,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    marginTop: 20,
    padding: 30,
    borderRadius: 12,
    backgroundColor: "white",
    width: "100%",
    minHeight: 130,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    marginRight: 16,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
  icon: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  address: {
    color: "#98989bff",
    fontWeight: "500",
    paddingTop: 4,
  },
  time: {
    color: "green",
    fontWeight: "500",
    paddingTop: 4,
  },
});
