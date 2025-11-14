import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LocationPermission({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Location Icon */}
        <View style={styles.iconCircle}>
          <View style={styles.iconInner}>
            <Text style={styles.iconText}>📍</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>
          <Text style={styles.titleEnable}>Enable{"\n"}</Text>
          <Text style={styles.titleLocation}>Location</Text>
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Please enable your location to find food resources near you.
        </Text>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.allowButton}>
          <Text style={styles.allowButtonText}>Allow Location</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.maybeLaterButton}>
          <Text style={styles.maybeLaterText}>Maybe later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 28,
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  iconInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 32,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  titleEnable: {
    fontSize: 36,
    fontWeight: "600",
    color: "#D9534F",
    lineHeight: 44,
  },
  titleLocation: {
    fontSize: 36,
    fontWeight: "600",
    color: "#D9534F",
    lineHeight: 44,
  },
  description: {
    fontSize: 15,
    color: "#999",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  allowButton: {
    backgroundColor: "#D9534F",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  allowButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
  maybeLaterButton: {
    alignItems: "center",
    paddingVertical: 12,
  },
  maybeLaterText: {
    color: "#333",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});
