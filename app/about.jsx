import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  Dimensions 
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* 1. IMAGE DE COUVERTURE AVEC TITRE */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000' }} 
          style={styles.coverImage}
        />
        <View style={styles.titleOverlay}>
          <Text style={styles.mainTitle}>Notre Histoire 📖</Text>
        </View>
      </View>

      <View style={styles.body}>
        {/* 2. SECTION MISSION */}
        <Text style={styles.sectionLabel}>NOTRE MISSION</Text>
        <Text style={styles.description}>
          Chez <Text style={{fontWeight: 'bold', color: '#FF6B6B'}}>QuickBite</Text>, nous pensons que 
          bien manger ne devrait pas prendre des heures. Nous avons créé cette application pour 
          transformer chaque utilisateur en chef cuisinier, même avec un emploi du temps chargé.
        </Text>

        {/* 3. GRILLE D'ICONES (EMOJIS) ET TEXTE */}
        <View style={styles.featuresGrid}>
          <View style={styles.featureItem}>
            <View style={styles.iconCircle}><Text style={styles.emoji}>⏱️</Text></View>
            <Text style={styles.featureTitle}>Rapide</Text>
            <Text style={styles.featureSub}>Moins de 15 min</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconCircle}><Text style={styles.emoji}>🥗</Text></View>
            <Text style={styles.featureTitle}>Sain</Text>
            <Text style={styles.featureSub}>Produits frais</Text>
          </View>

          <View style={styles.featureItem}>
            <View style={styles.iconCircle}><Text style={styles.emoji}>👨‍🍳</Text></View>
            <Text style={styles.featureTitle}>Simple</Text>
            <Text style={styles.featureSub}>Pas à pas</Text>
          </View>
        </View>

        {/* 4. SECTION ÉQUIPE OU IMAGE SECONDAIRE */}
        <View style={styles.teamCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1577100078279-b3445dee6274?w=400' }} 
            style={styles.teamImage}
          />
          <View style={styles.teamTextContainer}>
            <Text style={styles.teamTitle}>Cuisiné avec amour</Text>
            <Text style={styles.teamDescription}>
              Basé à Paris, notre équipe teste chaque recette pour garantir le goût.
            </Text>
          </View>
        </View>

        {/* 5. BOUTON RETOUR */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Retour à l'accueil</Text>
        </TouchableOpacity>
        
        <Text style={styles.version}>Version 1.0.0 • QuickBite App</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  
  // Header avec image
  header: { height: 250, position: 'relative' },
  coverImage: { width: '100%', height: '100%' },
  titleOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: { color: '#FFF', fontSize: 32, fontWeight: '900' },

  body: { padding: 25 },
  
  sectionLabel: { 
    fontSize: 12, 
    fontWeight: '800', 
    color: '#FF6B6B', 
    letterSpacing: 2, 
    marginBottom: 10 
  },
  description: { 
    fontSize: 17, 
    color: '#444', 
    lineHeight: 26, 
    marginBottom: 30 
  },

  // Grille des fonctionnalités
  featuresGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 40 
  },
  featureItem: { alignItems: 'center', width: '30%' },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#EEE'
  },
  emoji: { fontSize: 24 },
  featureTitle: { fontWeight: 'bold', fontSize: 14, color: '#1A1A1A' },
  featureSub: { fontSize: 11, color: '#888', textAlign: 'center', marginTop: 2 },

  // Petite carte "Equipe"
  teamCard: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 40
  },
  teamImage: { width: 80, height: 80, borderRadius: 15 },
  teamTextContainer: { flex: 1, marginLeft: 15 },
  teamTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  teamDescription: { fontSize: 13, color: '#666' },

  // Bouton Retour
  backButton: { 
    backgroundColor: '#1A1A1A', 
    padding: 20, 
    borderRadius: 18, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2
  },
  backButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  
  version: { 
    textAlign: 'center', 
    marginTop: 20, 
    color: '#BBB', 
    fontSize: 12,
    marginBottom: 20 
  }
});