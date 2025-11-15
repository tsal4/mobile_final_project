import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const ResourceDetails = ({ route, navigation }) => {
  const { resource } = route.params || {};
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [favoriteScale] = useState(new Animated.Value(1));
  const [detailsSlide] = useState(new Animated.Value(SCREEN_HEIGHT));

  // Animation for favorite button
  const animateFavorite = () => {
    Animated.sequence([
      Animated.timing(favoriteScale, {
        toValue: 1.3,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(favoriteScale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Animation for slide-up details panel
  useEffect(() => {
    if (showDetails) {
      Animated.spring(detailsSlide, {
        toValue: 0,
        useNativeDriver: true,
        tension: 50,
        friction: 8,
      }).start();
    } else {
      Animated.timing(detailsSlide, {
        toValue: SCREEN_HEIGHT,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [showDetails]);

  const handleFavoritePress = () => {
    animateFavorite();
    setIsFavorite(!isFavorite);
    // TODO: Update favorites in Firebase/state management
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Default resource data if none provided
  const defaultResource = {
    name: 'Community Food Pantry',
    address: '123 Main Street, Cleveland, OH 44101',
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: '10:00 AM - 2:00 PM',
      sunday: 'Closed',
    },
    eligibility: 'Open to all community members. No ID required.',
    rules: 'Please bring your own bags. Limit of 2 visits per month per household.',
    transportation: 'Public transportation available. Bus routes 15, 22, and 45 stop nearby. Free parking available.',
    personalInfoRequired: false,
    transportationType: ['Public Transit', 'Car', 'Walk'],
  };

  const resourceData = resource || defaultResource;

  return (
    <View style={styles.container}>
      {/* Header with back button and favorite */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Resource Details</Text>
        <Animated.View style={{ transform: [{ scale: favoriteScale }] }}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleFavoritePress}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={28}
              color={isFavorite ? '#FF6B6B' : '#666'}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Resource Name */}
        <Text style={styles.resourceName}>{resourceData.name}</Text>

        {/* Address */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="location" size={20} color="#4A90E2" />
            <Text style={styles.sectionTitle}>Address</Text>
          </View>
          <Text style={styles.sectionContent}>{resourceData.address}</Text>
        </View>

        {/* Operating Hours */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="time" size={20} color="#4A90E2" />
            <Text style={styles.sectionTitle}>Operating Hours</Text>
          </View>
          <View style={styles.hoursContainer}>
            {Object.entries(resourceData.hours || {}).map(([day, hours]) => (
              <View key={day} style={styles.hoursRow}>
                <Text style={styles.dayText}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}:
                </Text>
                <Text style={styles.hoursText}>{hours}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Eligibility */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#4A90E2" />
            <Text style={styles.sectionTitle}>Eligibility</Text>
          </View>
          <Text style={styles.sectionContent}>
            {resourceData.eligibility || 'No specific eligibility requirements.'}
          </Text>
        </View>

        {/* Rules */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text" size={20} color="#4A90E2" />
            <Text style={styles.sectionTitle}>Rules & Guidelines</Text>
          </View>
          <Text style={styles.sectionContent}>
            {resourceData.rules || 'Please follow all posted guidelines.'}
          </Text>
        </View>

        {/* Transportation Info */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="car" size={20} color="#4A90E2" />
            <Text style={styles.sectionTitle}>Transportation</Text>
          </View>
          <Text style={styles.sectionContent}>
            {resourceData.transportation || 'Transportation information not available.'}
          </Text>
          {resourceData.transportationType && (
            <View style={styles.transportTags}>
              {resourceData.transportationType.map((type, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{type}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Personal Information Required */}
        {resourceData.personalInfoRequired !== undefined && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Ionicons
                name={resourceData.personalInfoRequired ? 'alert-circle' : 'checkmark-circle-outline'}
                size={20}
                color={resourceData.personalInfoRequired ? '#FF6B6B' : '#4CAF50'}
              />
              <Text style={styles.sectionTitle}>Personal Information</Text>
            </View>
            <Text style={styles.sectionContent}>
              {resourceData.personalInfoRequired
                ? 'Personal information is required to access this resource.'
                : 'No personal information required.'}
            </Text>
          </View>
        )}

        {/* Button to show additional details */}
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={toggleDetails}
          activeOpacity={0.7}
        >
          <Text style={styles.detailsButtonText}>
            {showDetails ? 'Hide Additional Details' : 'Show Additional Details'}
          </Text>
          <Ionicons
            name={showDetails ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#4A90E2"
          />
        </TouchableOpacity>
      </ScrollView>

      {/* Slide-up panel for additional details */}
      <Animated.View
        style={[
          styles.detailsPanel,
          {
            transform: [{ translateY: detailsSlide }],
          },
        ]}
      >
        <View style={styles.panelHandle} />
        <ScrollView style={styles.panelContent}>
          <Text style={styles.panelTitle}>Additional Information</Text>
          <Text style={styles.panelText}>
            For more information, please contact the resource directly or visit their website.
          </Text>
          <Text style={styles.panelText}>
            This resource is committed to serving the community and providing access to food
            assistance for those in need.
          </Text>
          <TouchableOpacity
            style={styles.closePanelButton}
            onPress={toggleDetails}
            activeOpacity={0.7}
          >
            <Text style={styles.closePanelButtonText}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    textAlign: 'center',
  },
  favoriteButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  resourceName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  hoursContainer: {
    marginTop: 8,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  hoursText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
    textAlign: 'right',
  },
  transportTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  tag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: '500',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: 8,
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginRight: 8,
  },
  detailsPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  panelHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#CCCCCC',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  panelContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  panelTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  panelText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  closePanelButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  closePanelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default ResourceDetails;
