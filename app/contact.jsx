import { Link } from 'expo-router';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    alert(`Merci ${name}, votre message a été envoyé !`);
    // Ici, vous ajouteriez votre logique d'envoi (API, Email, etc.)
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Contactez-nous</Text>
          <Text style={styles.subtitle}>Une question ? Une idée ? On vous répond sous 24h.</Text>
        </View>

        {/* Info Cards (Quick Contact) */}
        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>📍</Text>
            <Text style={styles.infoText}>Paris, FR</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoIcon}>📞</Text>
            <Text style={styles.infoText}>+33 1 23 45</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formCard}>
          <Text style={styles.label}>Nom complet</Text>
          <TextInput 
            style={styles.input}
            placeholder="Jean Dupont"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input}
            placeholder="jean@exemple.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholderTextColor="#A0A0A0"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput 
            style={[styles.input, styles.textArea]}
            placeholder="Dites-nous tout..."
            multiline
            numberOfLines={4}
            value={message}
            onChangeText={setMessage}
            textAlignVertical="top"
            placeholderTextColor="#A0A0A0"
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Envoyer le message</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Link (Placeholder) */}
        <View style={styles.socialSection}>
          <Text style={styles.socialTitle}>Suivez-nous</Text>
          <View style={styles.socialIcons}>
            <Text style={styles.socialIcon}>🐦</Text>
            <Text style={styles.socialIcon}>📸</Text>
            <Text style={styles.socialIcon}>💼</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  infoCard: {
    backgroundColor: '#FFF',
    width: '48%',
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#E9ECEF',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  sendButton: {
    backgroundColor: '#000', // Noir pour un look premium/minimaliste
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 25,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  socialTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 30,
  },
  socialIcon: {
    fontSize: 28,
  }
});