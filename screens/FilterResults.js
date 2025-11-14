import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function FilterResults({ navigation }) {
  const [availability, setAvailability] = useState("Open Now");
  const [dietaryNeeds, setDietaryNeeds] = useState([]);
  const [organizationType, setOrganizationType] = useState([]);
  const [personalInfoRequired, setPersonalInfoRequired] = useState(false);
  const [transportation, setTransportation] = useState("Walking");

  const toggleDietaryNeed = (need) => {
    setDietaryNeeds((prev) =>
      prev.includes(need) ? prev.filter((n) => n !== need) : [...prev, need]
    );
  };

  const toggleOrganizationType = (type) => {
    setOrganizationType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleReset = () => {
    setAvailability("Open Now");
    setDietaryNeeds([]);
    setOrganizationType([]);
    setPersonalInfoRequired(false);
    setTransportation("Walking");
  };

  const handleApply = () => {
    // Handle filter application logic here
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Filter Results</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Availability Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Availability</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[
                styles.pillButton,
                availability === "Open Now" && styles.pillButtonSelected,
              ]}
              onPress={() => setAvailability("Open Now")}
            >
              <Text
                style={[
                  styles.pillButtonText,
                  availability === "Open Now" && styles.pillButtonTextSelected,
                ]}
              >
                Open Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.pillButton,
                availability === "Upcoming Events" && styles.pillButtonSelected,
              ]}
              onPress={() => setAvailability("Upcoming Events")}
            >
              <Text
                style={[
                  styles.pillButtonText,
                  availability === "Upcoming Events" &&
                    styles.pillButtonTextSelected,
                ]}
              >
                Upcoming Events
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dietary Needs Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dietary Needs</Text>
          <View style={styles.buttonRow}>
            {["Vegetarian", "Gluten-Free", "Halal", "Kosher"].map((need) => (
              <TouchableOpacity
                key={need}
                style={[
                  styles.pillButton,
                  dietaryNeeds.includes(need) && styles.pillButtonSelected,
                ]}
                onPress={() => toggleDietaryNeed(need)}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    dietaryNeeds.includes(need) && styles.pillButtonTextSelected,
                  ]}
                >
                  {need}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Organization Type Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Organization Type</Text>
          <View style={styles.buttonRow}>
            {[
              "Government",
              "Church",
              "Community Center",
              "Non-Profit",
            ].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.pillButton,
                  organizationType.includes(type) && styles.pillButtonSelected,
                ]}
                onPress={() => toggleOrganizationType(type)}
              >
                <Text
                  style={[
                    styles.pillButtonText,
                    organizationType.includes(type) &&
                      styles.pillButtonTextSelected,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Personal Information Required Section */}
        <View style={styles.section}>
          <View style={styles.toggleRow}>
            <Text style={styles.sectionTitle}>
              Personal Information Required
            </Text>
            <TouchableOpacity
              style={[
                styles.toggle,
                personalInfoRequired && styles.toggleActive,
              ]}
              onPress={() => setPersonalInfoRequired(!personalInfoRequired)}
            >
              <View
                style={[
                  styles.toggleThumb,
                  personalInfoRequired && styles.toggleThumbActive,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Transportation Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transportation</Text>
          <View style={styles.segmentedControl}>
            <TouchableOpacity
              style={[
                styles.segment,
                transportation === "Walking" && styles.segmentSelected,
              ]}
              onPress={() => setTransportation("Walking")}
            >
              <Text style={styles.segmentIcon}>🚶</Text>
              <Text
                style={[
                  styles.segmentText,
                  transportation === "Walking" && styles.segmentTextSelected,
                ]}
              >
                Walking
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.segment,
                transportation === "Transit" && styles.segmentSelected,
              ]}
              onPress={() => setTransportation("Transit")}
            >
              <Text style={styles.segmentIcon}>🚌</Text>
              <Text
                style={[
                  styles.segmentText,
                  transportation === "Transit" && styles.segmentTextSelected,
                ]}
              >
                Transit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.segment,
                transportation === "Driving" && styles.segmentSelected,
              ]}
              onPress={() => setTransportation("Driving")}
            >
              <Text style={styles.segmentIcon}>🚗</Text>
              <Text
                style={[
                  styles.segmentText,
                  transportation === "Driving" && styles.segmentTextSelected,
                ]}
              >
                Driving
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    fontSize: 24,
    color: "#333",
    fontWeight: "300",
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  pillButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginRight: 10,
    marginBottom: 10,
  },
  pillButtonSelected: {
    backgroundColor: "#4CAF50",
  },
  pillButtonText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  pillButtonTextSelected: {
    color: "#FFFFFF",
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    paddingHorizontal: 3,
  },
  toggleActive: {
    backgroundColor: "#4CAF50",
  },
  toggleThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },
  toggleThumbActive: {
    alignSelf: "flex-end",
  },
  segmentedControl: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 4,
  },
  segment: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 6,
  },
  segmentSelected: {
    backgroundColor: "#4CAF50",
  },
  segmentIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  segmentText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  segmentTextSelected: {
    color: "#FFFFFF",
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  resetButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    marginRight: 12,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  applyButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: "#4CAF50",
    alignItems: "center",
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});