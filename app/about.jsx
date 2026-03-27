import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const About = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image Section */}
      <View style={styles.headerContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800' }} 
          style={styles.headerImage} 
        />
        <View style={styles.overlay} />
        <Text style={styles.title}>Notre Histoire</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentCard}>
        <Text style={styles.sectionTitle}>Qui sommes-nous ?</Text>
        <Text style={styles.description}>
          Nous sommes une équipe passionnée dédiée à créer des solutions innovantes. 
          Notre mission est de simplifier votre quotidien grâce à la technologie 
          et au design intuitif.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>50+</Text>
            <Text style={styles.statLabel}>Projets</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Experts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Support</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Notre Vision</Text>
        <Text style={styles.description}>
          Innover sans cesse pour repousser les limites du possible, tout en 
          gardant l'humain au cœur de chaque ligne de code.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contactez l'équipe</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>Version 1.0.2 • Made with ❤️</Text>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  headerContainer: {
    height: 250,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', // Assombrit l'image pour lire le texte
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 1,
  },
  contentCard: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30, // Fait chevaucher la carte sur l'image
    paddingHorizontal: 25,
    paddingTop: 35,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    marginTop: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#F1F3F5',
    borderRadius: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    textAlign: 'center',
    color: '#BBB',
    fontSize: 12,
    marginVertical: 30,
  },
});