import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import api from "../../api/callapi";
import { Ionicons } from "@expo/vector-icons";
import useAuthStore from "../../store/authStore";

export default function Profile() {
  const { email: storeEmail, name: storeName, token, setAuth, logout } = useAuthStore();
  const router = useRouter();

  // States pour les champs REELLEMENT modifiables (BD)
  const [name, setName] = useState(storeName || "");
  const [email, setEmail] = useState(storeEmail || "");
  const [loading, setLoading] = useState(false);

  // Fonction pour sauvegarder les vraies données en BD
  const handleUpdateProfile = async () => {
    if (!name || !email) {
      Alert.alert("Erreur", "Le nom et l'email ne peuvent pas être vides.");
      return;
    }

    setLoading(true);
    try {
      const response = await api.put(`/user/update-profile`, 
        { name: name, email: email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        // Mettre à jour le store local pour que le changement soit immédiat partout
        setAuth({ token, name, email });
        Alert.alert("Succès", "Informations mises à jour ! ✨");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Problème lors de la mise à jour.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER AVEC AVATAR */}
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?u=' + storeEmail }} style={styles.avatar} />
          <View style={styles.badgeVerified}>
            <Ionicons name="checkmark-circle" size={24} color="#4ADE80" />
          </View>
        </View>
        <Text style={styles.titlePage}>Mon Compte</Text>
      </View>

      {/* SECTION 1 : CHAMPS MODIFIABLES (EN BD) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations Personnelles</Text>
        
        <Text style={styles.label}>Nom Complet</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#64748b" />
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>

        <Text style={styles.label}>Adresse Email</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#64748b" />
          <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        </View>

        <TouchableOpacity style={styles.btnSave} onPress={handleUpdateProfile} disabled={loading}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnSaveText}>Sauvegarder</Text>}
        </TouchableOpacity>
      </View>

      {/* SECTION 2 : CHAMPS STATIQUES / BLOQUÉS (NON MODIFIABLES) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Statistiques & Grade</Text>
        
        <View style={styles.blockedCard}>
          <View style={styles.blockedRow}>
            <Text style={styles.blockedLabel}>Statut du compte</Text>
            <Text style={[styles.blockedValue, {color: '#FF6B6B'}]}>Membre Premium</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.blockedRow}>
            <Text style={styles.blockedLabel}>Recettes postées</Text>
            <Text style={styles.blockedValue}>24</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.blockedRow}>
            <Text style={styles.blockedLabel}>Date d'inscription</Text>
            <Text style={styles.blockedValue}>12 Mars 2024</Text>
          </View>

          <View style={styles.lockInfo}>
            <Ionicons name="lock-closed" size={12} color="#94a3b8" />
            <Text style={styles.lockText}>Ces informations sont gérées par le système.</Text>
          </View>
        </View>
      </View>

      {/* DÉCONNEXION */}
      <TouchableOpacity style={styles.btnLogout} onPress={() => { logout(); router.replace("/login"); }}>
        <Ionicons name="log-out-outline" size={22} color="#FF6B6B" />
        <Text style={styles.btnLogoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#F8FAFC', paddingBottom: 40 },
  header: { alignItems: 'center', paddingTop: 60, paddingBottom: 20, backgroundColor: '#fff' },
  avatarContainer: { position: 'relative', marginBottom: 15 },
  avatar: { width: 110, height: 110, borderRadius: 55, borderWidth: 3, borderColor: '#FF6B6B' },
  badgeVerified: { position: 'absolute', bottom: 5, right: 5, backgroundColor: '#fff', borderRadius: 12 },
  titlePage: { fontSize: 24, fontWeight: '900', color: '#1e293b' },

  section: { paddingHorizontal: 25, marginTop: 25 },
  sectionTitle: { fontSize: 16, fontWeight: '800', color: '#1e293b', marginBottom: 15, marginLeft: 5 },
  
  label: { fontSize: 13, fontWeight: '700', color: '#64748b', marginBottom: 8, marginLeft: 5 },
  inputContainer: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', 
    borderRadius: 15, paddingHorizontal: 15, height: 55, marginBottom: 15,
    borderWidth: 1, borderColor: '#E2E8F0'
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16, color: '#1e293b', fontWeight: '600' },
  
  btnSave: { backgroundColor: '#FF6B6B', padding: 16, borderRadius: 15, marginTop: 10, alignItems: 'center', shadowColor: '#FF6B6B', shadowOpacity: 0.3, shadowRadius: 5, elevation: 4 },
  btnSaveText: { color: '#fff', fontWeight: '800', fontSize: 16 },

  // Styles pour les champs bloqués
  blockedCard: { backgroundColor: '#fff', borderRadius: 20, padding: 20, borderWidth: 1, borderColor: '#E2E8F0' },
  blockedRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  blockedLabel: { color: '#64748b', fontWeight: '600' },
  blockedValue: { color: '#1e293b', fontWeight: '800' },
  divider: { height: 1, backgroundColor: '#F1F5F9' },
  lockInfo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 },
  lockText: { color: '#94a3b8', fontSize: 11, marginLeft: 5, fontStyle: 'italic' },

  btnLogout: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 40, padding: 15 },
  btnLogoutText: { color: '#FF6B6B', fontWeight: '800', fontSize: 16, marginLeft: 10 }
});