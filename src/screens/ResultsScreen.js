import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import * as Location from 'expo-location';
import { colors } from '../config/config';
import { varicoseStages } from '../data/stagesData';
import { preventionTips } from '../data/stagesData';
import { findNearbySpecialists } from '../services/apiService';

export default function ResultsScreen({ route, navigation }) {
  const { imageUri, results } = route.params;
  const [simpleMode, setSimpleMode] = useState(true);
  const [specialists, setSpecialists] = useState([]);
  const [loadingSpecialists, setLoadingSpecialists] = useState(false);
  const [location, setLocation] = useState(null);

  const stageInfo = varicoseStages[results.stage] || varicoseStages.C2;

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
        loadSpecialists(loc.coords.latitude, loc.coords.longitude);
      }
    } catch (error) {
      console.log('Location error:', error);
    }
  };

  const loadSpecialists = async (latitude, longitude) => {
    setLoadingSpecialists(true);
    const result = await findNearbySpecialists(latitude, longitude, results.specialist);
    setLoadingSpecialists(false);

    if (result.success) {
      setSpecialists(result.data);
    }
  };

  const getSeverityColor = () => {
    if (results.stage === 'C0' || results.stage === 'C1') return colors.success;
    if (results.stage === 'C2' || results.stage === 'C3') return colors.warning;
    return colors.error;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButton}>← Home</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Results</Text>
        <TouchableOpacity
          onPress={() => setSimpleMode(!simpleMode)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleText}>
            {simpleMode ? '📖' : '🎓'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>

        <View style={[styles.stageCard, { borderLeftColor: stageInfo.color }]}>
          <View style={styles.stageHeader}>
            <View>
              <Text style={styles.stageLabel}>Detected Stage</Text>
              <Text style={styles.stageName}>{results.stage}: {results.stage_label}</Text>
            </View>
            <View style={[styles.confidenceBadge, { backgroundColor: stageInfo.color }]}>
              <Text style={styles.confidenceText}>
                {Math.round(results.confidence * 100)}%
              </Text>
            </View>
          </View>

          <View style={[styles.severityBadge, { backgroundColor: getSeverityColor() }]}>
            <Text style={styles.severityText}>
              Severity: {results.severity}
            </Text>
          </View>

          <View style={styles.descriptionBox}>
            <Text style={styles.description}>
              {simpleMode ? stageInfo.simple : stageInfo.professional}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Symptoms</Text>
          {stageInfo.symptoms.map((symptom, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{symptom}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended Actions</Text>
          {results.remedies.map((remedy, index) => (
            <View key={index} style={styles.remedyCard}>
              <Text style={styles.remedyNumber}>{index + 1}</Text>
              <Text style={styles.remedyText}>{remedy}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next Steps</Text>
          {results.next_steps.map((step, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.checkmark}>✓</Text>
              <Text style={styles.listText}>{step}</Text>
            </View>
          ))}
        </View>

        {results.stage === 'C0' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Prevention Tips</Text>
            {preventionTips.map((tip, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listText}>{tip}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <View style={styles.specialistHeader}>
            <Text style={styles.sectionTitle}>Nearby Specialists</Text>
            {loadingSpecialists && (
              <ActivityIndicator size="small" color={colors.primary} />
            )}
          </View>
          
          {specialists.length === 0 && !loadingSpecialists && (
            <Text style={styles.noSpecialists}>
              Enable location to find nearby specialists
            </Text>
          )}

          {specialists.map((specialist, index) => (
            <View key={index} style={styles.specialistCard}>
              <View style={styles.specialistHeader}>
                <Text style={styles.specialistName}>{specialist.name}</Text>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>⭐ {specialist.rating}</Text>
                </View>
              </View>
              <Text style={styles.specialistSpecialty}>{specialist.specialty}</Text>
              <Text style={styles.specialistAddress}>📍 {specialist.address}</Text>
              <Text style={styles.specialistDistance}>🚗 {specialist.distance} away</Text>
              <Text style={styles.specialistPhone}>📞 {specialist.phone}</Text>
              <View style={styles.availabilityBadge}>
                <Text style={styles.availabilityText}>{specialist.availability}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerIcon}>⚠️</Text>
          <Text style={styles.disclaimerText}>
            This analysis is for informational purposes only and should not replace
            professional medical diagnosis. Please consult a healthcare provider.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.scanAgainButton}
          onPress={() => navigation.navigate('Camera')}
        >
          <Text style={styles.scanAgainButtonText}>Scan Again</Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  backButton: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  toggleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    backgroundColor: colors.lightGray,
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  stageCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  stageLabel: {
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 4,
  },
  stageName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  confidenceBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  confidenceText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  severityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 12,
  },
  severityText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  descriptionBox: {
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 16,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 18,
    color: colors.primary,
    marginRight: 12,
    marginTop: 2,
  },
  checkmark: {
    fontSize: 18,
    color: colors.success,
    marginRight: 12,
    marginTop: 2,
  },
  listText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  remedyCard: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  remedyNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 12,
  },
  remedyText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
  },
  specialistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noSpecialists: {
    fontSize: 14,
    color: colors.darkGray,
    textAlign: 'center',
    paddingVertical: 20,
  },
  specialistCard: {
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  specialistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
  },
  ratingBadge: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
  },
  specialistSpecialty: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
    fontWeight: '600',
  },
  specialistAddress: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 8,
  },
  specialistDistance: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 4,
  },
  specialistPhone: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 4,
  },
  availabilityBadge: {
    backgroundColor: colors.success,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 12,
  },
  availabilityText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  disclaimer: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  disclaimerIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 13,
    color: '#92400E',
    lineHeight: 20,
  },
  scanAgainButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 20,
    alignItems: 'center',
    minHeight: 56,
    justifyContent: 'center',
  },
  scanAgainButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
