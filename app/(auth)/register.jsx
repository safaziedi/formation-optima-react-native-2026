import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import api from "../../api/callapi";

const { width } = Dimensions.get("window");

export default function Register() {
  const router = useRouter();

  // 3. States pour le formulaire
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // 4. Fonction d'inscription
  const handleRegister = async () => {
    // Validation basique
    if (!fullname || !email || !password) {
      Alert.alert(
        "Champs manquants",
        "Veuillez remplir toutes les informations pour créer votre compte.",
      );
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/user/create", {
        fullname: fullname,
        email: email,
        password: password,
      });

      if (response.status === 201 || response.status === 200) {
        Alert.alert(
          "Succès ! 🥗",
          "Votre compte gourmet a été créé avec succès.",
          [{ text: "Se connecter", onPress: () => router.push("/login") }],
        );
      }
    } catch (error) {
      console.error("Erreur Register:", error);
      const errorMsg =
        error.response?.data?.message ||
        "Impossible de créer le compte. L'email est peut-être déjà utilisé.";
      Alert.alert("Erreur", errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. TOP IMAGE AREA */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000",
            }}
            style={styles.topImage}
          />
          <LinearGradient
            colors={["transparent", "rgba(255,255,255,1)"]}
            style={styles.gradient}
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="chevron-back" size={28} color="#1e293b" />
          </TouchableOpacity>
        </View>

        {/* 2. HEADER TEXT */}
        <View style={styles.header}>
          <Text style={styles.welcomeTitle}>Créer un Profil</Text>
          <Text style={styles.welcomeSubtitle}>
            Rejoignez la table et commencez à cuisiner.
          </Text>
        </View>

        {/* 3. FORM CARD */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.formCard}
        >
          {/* Input: Nom */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Nom Complet</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#FF6B6B" />
              <TextInput
                placeholder="Chef Nom"
                style={styles.input}
                value={fullname}
                onChangeText={setFullname}
              />
            </View>
          </View>

          {/* Input: Email */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#FF6B6B" />
              <TextInput
                placeholder="chef@example.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* Input: Password */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Mot de passe</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="lock-closed-outline" size={20} color="#FF6B6B" />
              <TextInput
                placeholder="••••••••"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          {/* Bouton Inscription avec Loading */}
          <TouchableOpacity
            style={styles.registerBtn}
            onPress={handleRegister}
            disabled={loading}
          >
            <LinearGradient
              colors={["#FF6B6B", "#FF8E8E"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientBtn}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <>
                  <Text style={styles.registerBtnText}>S'inscrire</Text>
                  <Ionicons
                    name="restaurant-outline"
                    size={20}
                    color="#fff"
                    style={{ marginLeft: 10 }}
                  />
                </>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Footer Link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Déjà un gourmet ? </Text>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.linkText}>Se connecter</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </KeyboardAvoidingView>
        <View style={{ height: 50 }} />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Image Section
  imageContainer: { width: width, height: 300 },
  topImage: { width: "100%", height: "100%" },
  gradient: { position: "absolute", bottom: 0, left: 0, right: 0, height: 150 },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 8,
    elevation: 5,
  },

  // Header
  header: { paddingHorizontal: 30, marginBottom: 30 },
  welcomeTitle: { fontSize: 36, fontWeight: "900", color: "#1e293b" },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 8,
    fontWeight: "500",
  },

  // Form Card
  formCard: { paddingHorizontal: 30 },
  inputBox: { marginBottom: 20 },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 65,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  input: { flex: 1, marginLeft: 15, fontSize: 16, color: "#1e293b" },

  // Button
  registerBtn: {
    height: 65,
    borderRadius: 20,
    marginTop: 10,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#FF6B6B",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  gradientBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerBtnText: { color: "#fff", fontSize: 18, fontWeight: "800" },

  // Footer
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 30 },
  footerText: { color: "#64748b", fontSize: 15 },
  linkText: { color: "#FF6B6B", fontWeight: "800" },
});
