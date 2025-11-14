import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

export default function FoodNearby({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <View style={styles.map}>
          {/* Map pins represented as colored circles */}
          <View style={[styles.pin, styles.pin1]} />
          <View style={[styles.pin, styles.pin2]} />
          <View style={[styles.pin, styles.pin3]} />
          <View style={[styles.pin, styles.pin4]} />
          <View style={[styles.pin, styles.pin5]} />
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.heading}>Find Food Nearby</Text>
        <Text style={styles.description}>
          To show you the closest food pantries, soup kitchens, and other
          resources, we need to know your location.
        </Text>

        {/* Feature Card 1 */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📍</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Discover food resources closest to you.
            </Text>
            <TouchableOpacity>
              <Text style={styles.cardLink}>Find nearby food banks</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Feature Card 2 */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>🧭</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Get walking, driving, or transit directions.
            </Text>
            <TouchableOpacity>
              <Text style={styles.cardLink}>Directions to your destination</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Allow Location Access</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryLink}>
          <Text style={styles.secondaryLinkText}>Maybe Later</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tertiaryLink}>
          <Text style={styles.tertiaryLinkText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  mapContainer: {
    height: 280,
    backgroundColor: "#E8E6E1",
    padding: 20,
  },
  map: {
    flex: 1,
    backgroundColor: "#F0EDE5",
    borderRadius: 8,
    position: "relative",
    borderWidth: 1,
    borderColor: "#DDD",
  },
  pin: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  pin1: {
    backgroundColor: "#8B0000",
    top: "30%",
    left: "25%",
    width: 24,
    height: 24,
  },
  pin2: {
    backgroundColor: "#FF4500",
    top: "40%",
    left: "60%",
    width: 24,
    height: 24,
  },
  pin3: {
    backgroundColor: "#008B8B",
    top: "20%",
    left: "70%",
  },
  pin4: {
    backgroundColor: "#90EE90",
    top: "50%",
    left: "40%",
  },
  pin5: {
    backgroundColor: "#FF8C00",
    top: "60%",
    left: "15%",
    width: 18,
    height: 18,
  },
  content: {
    padding: 24,
    backgroundColor: "#FAFAFA",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#E3F2FD",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  cardLink: {
    fontSize: 14,
    color: "#2196F3",
  },
  primaryButton: {
    backgroundColor: "#2196F3",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  primaryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryLink: {
    alignItems: "center",
    marginBottom: 12,
  },
  secondaryLinkText: {
    color: "#2196F3",
    fontSize: 16,
  },
  tertiaryLink: {
    alignItems: "center",
    marginBottom: 32,
  },
  tertiaryLinkText: {
    color: "#90CAF9",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});