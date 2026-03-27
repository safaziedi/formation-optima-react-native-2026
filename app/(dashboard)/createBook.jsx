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

const CreateBook = () => {
  const [category, setCategory] = useState('Roman');

  const categories = ['Roman', 'Poésie', 'Science', 'Histoire', 'BD'];

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Nouveau Livre</Text>
            <Text style={styles.subtitle}>Partagez votre prochaine œuvre avec le monde.</Text>
          </View>

          {/* Book Cover Placeholder */}
          <TouchableOpacity style={styles.coverUpload}>
            <View style={styles.coverPlaceholder}>
              <Text style={styles.uploadIcon}>📚</Text>
              <Text style={styles.uploadText}>Ajouter une couverture</Text>
            </View>
          </TouchableOpacity>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Titre du livre</Text>
              <TextInput 
                style={styles.input}
                placeholder="L'ombre du vent..."
                placeholderTextColor="#94a3b8"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Auteur</Text>
              <TextInput 
                style={styles.input}
                placeholder="Nom de l'écrivain"
                placeholderTextColor="#94a3b8"
              />
            </View>

            {/* Category Selector */}
            <Text style={styles.label}>Catégorie</Text>
            <View style={styles.categoryList}>
              {categories.map((cat) => (
                <TouchableOpacity 
                  key={cat}
                  onPress={() => setCategory(cat)}
                  style={[
                    styles.categoryBadge, 
                    category === cat && styles.categoryBadgeActive
                  ]}
                >
                  <Text style={[
                    styles.categoryText, 
                    category === cat && styles.categoryTextActive
                  ]}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Résumé</Text>
              <TextInput 
                style={[styles.input, styles.textArea]}
                placeholder="Écrivez un court résumé ici..."
                placeholderTextColor="#94a3b8"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Publier le livre</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFE',
  },
  scrollContent: {
    padding: 25,
  },
  header: {
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 5,
  },
  coverUpload: {
    width: '100%',
    height: 180,
    backgroundColor: '#F1F5F9',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  uploadIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  uploadText: {
    color: '#64748B',
    fontWeight: '600',
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1E293B',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  textArea: {
    height: 120,
    paddingTop: 15,
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
    marginTop: 5,
  },
  categoryBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categoryBadgeActive: {
    backgroundColor: '#F59E0B', // Orange ambré pour un côté "Bibliothèque"
    borderColor: '#F59E0B',
  },
  categoryText: {
    color: '#64748B',
    fontSize: 13,
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#FFF',
  },
  submitButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 15,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});