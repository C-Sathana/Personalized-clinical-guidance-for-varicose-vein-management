import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { colors } from '../config/config';
import { causes, preventionTips } from '../data/stagesData';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [simpleMode, setSimpleMode] = useState(true);

  const pages = [
    {
      title: 'What are Varicose Veins?',
      emoji: '🦵',
      professional: 'Varicose veins are enlarged, twisted veins that occur when vein valves malfunction, causing blood to pool instead of flowing efficiently back to the heart.',
      simple: 'Varicose veins are swollen, twisted veins you can see under your skin. They happen when the tiny doors inside your veins stop working properly.',
      points: [
        'Usually appear in legs and feet',
        'Look like twisted, bulging cords',
        'Can be blue, purple, or skin-colored',
        'Affect about 1 in 3 adults'
      ]
    },
    {
      title: 'Why Do They Occur?',
      emoji: '🔍',
      professional: 'Varicose veins develop due to venous insufficiency caused by weakened vein walls and malfunctioning valves, often influenced by genetic, hormonal, and lifestyle factors.',
      simple: 'Your veins have small doors that keep blood flowing in the right direction. When these doors get weak, blood flows backward and pools in the vein, making it swell.',
      points: causes
    },
    {
      title: 'CEAP Classification Stages',
      emoji: '📊',
      professional: 'The CEAP classification system (Clinical-Etiology-Anatomy-Pathophysiology) categorizes chronic venous disorders from C0 (no visible signs) to C6 (active venous ulcer).',
      simple: 'Doctors use a scale from C0 to C6 to describe how serious varicose veins are. C0 means healthy legs, C6 means an open wound that needs immediate care.',
      points: [
        'C0: No visible veins',
        'C1: Spider veins (small)',
        'C2: Varicose veins (bulging)',
        'C3: Swelling',
        'C4: Skin color changes',
        'C5: Healed wound',
        'C6: Active wound (urgent!)'
      ]
    },
    {
      title: 'Prevention & Care',
      emoji: '💪',
      professional: 'Preventive measures include regular exercise, weight management, compression therapy, leg elevation, and avoiding prolonged static postures to maintain optimal venous return.',
      simple: 'You can help prevent varicose veins by staying active, keeping a healthy weight, and giving your legs breaks when you stand or sit for long periods.',
      points: preventionTips
    }
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.replace('Home');
    }
  };

  const handleSkip = () => {
    navigation.replace('Home');
  };

  const currentPageData = pages[currentPage];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSimpleMode(!simpleMode)}
          style={styles.toggleButton}
        >
          <Text style={styles.toggleText}>
            {simpleMode ? '📖 Simple' : '🎓 Professional'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.emoji}>{currentPageData.emoji}</Text>
        <Text style={styles.title}>{currentPageData.title}</Text>
        
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>
            {simpleMode ? currentPageData.simple : currentPageData.professional}
          </Text>
        </View>

        <View style={styles.pointsContainer}>
          {currentPageData.points.map((point, index) => (
            <View key={index} style={styles.pointRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.pointText}>{point}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {pages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentPage && styles.dotActive
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>
            {currentPage === pages.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    fontSize: 16,
    color: colors.darkGray,
  },
  toggleButton: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  toggleText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionBox: {
    backgroundColor: colors.lightGray,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
    textAlign: 'center',
  },
  pointsContainer: {
    marginBottom: 20,
  },
  pointRow: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  bullet: {
    fontSize: 20,
    color: colors.primary,
    marginRight: 12,
    marginTop: -2,
  },
  pointText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 24,
  },
  nextButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    minHeight: 56,
    justifyContent: 'center',
  },
  nextButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
