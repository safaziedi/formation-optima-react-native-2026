import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Alert,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import api from "../../api/callapi";

const { width, height } = Dimensions.get("window");
const CUISINE_IMAGE =
  "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1000";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Pour afficher un spinner pendant l'appel
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Champs vides",
        "S'il vous plaît, remplissez l'email et le mot de passe.",
      );
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/user/login", {
        email: email,
        password: password,
      });

      // Si ton backend renvoie un succès (et un token par exemple)
      if (response.status === 200 || response.status === 201) {
        console.log("Succès:", response.data);

        // Redirection vers la page explore (dans le groupe dashboard)
        // Note: Expo Router gère le chemin relatif
        router.push("/explore");
      }
    } catch (error) {
      // Gestion des erreurs (Identifiants faux, serveur éteint, etc.)
      console.error("Erreur Login:", error);

      const errorMessage =
        error.response?.data?.message ||
        "Identifiants invalides ou problème de connexion.";
      Alert.alert("Échec de connexion", errorMessage);
    } finally {
      setLoading(false); // Désactive le chargement quoi qu'il arrive
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={{ uri: CUISINE_IMAGE }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.darkOverlay}>
            {/* --- BOUTON RETOUR --- */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={28} color="#fff" />
            </TouchableOpacity>
            {/* --------------------- */}

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.contentContainer}
            >
              <View style={styles.header}>
                <View style={styles.iconCircle}>
                  <Ionicons name="restaurant" size={35} color="#FF6B6B" />
                </View>
                <Text style={styles.brandTitle}>QuickBite</Text>
                <Text style={styles.brandTagline}>
                  L'Art de Bien Manger, Rapidement.
                </Text>
              </View>

              <View style={styles.formContainer}>
                <BlurView
                  intensity={Platform.OS === "ios" ? 40 : 80}
                  tint="dark"
                  style={styles.blurView}
                >
                  <Text style={styles.welcomeText}>Connexion</Text>

                  <View style={styles.inputWrapper}>
                    <Ionicons
                      name="mail-outline"
                      size={20}
                      color="rgba(255,255,255,0.6)"
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="Votre Email"
                      placeholderTextColor="rgba(255,255,255,0.4)"
                      style={styles.input}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={email} // Liaison du state
                      onChangeText={(text) => setEmail(text)} // Mise à jour du state
                    />
                  </View>

                  <View style={styles.inputWrapper}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={20}
                      color="rgba(255,255,255,0.6)"
                      style={styles.inputIcon}
                    />
                    <TextInput
                      placeholder="Votre Mot de passe"
                      placeholderTextColor="rgba(255,255,255,0.4)"
                      secureTextEntry
                      style={styles.input}
                      value={password} // Liaison du state
                      onChangeText={(text) => setPassword(text)} // Mise à jour du state
                    />
                  </View>

                  {/* Bouton avec indicateur de chargement */}
                  <TouchableOpacity
                    style={[styles.loginBtn, loading && { opacity: 0.7 }]}
                    onPress={handleLogin}
                    disabled={loading}
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" />
                    ) : (
                      <>
                        <Text style={styles.loginBtnText}>Déguster !</Text>
                        <Ionicons
                          name="chevron-forward"
                          size={20}
                          color="#fff"
                          style={{ marginLeft: 10 }}
                        />
                      </>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.forgotBtn}>
                    <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
                  </TouchableOpacity>
                </BlurView>
              </View>

              <View style={styles.footer}>
                <Text style={styles.noAccountText}>Pas encore membre ? </Text>
                <Link href="/register" asChild>
                  <TouchableOpacity>
                    <Text style={styles.signUpText}>S'inscrire</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { width: width, height: height },
  darkOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }, // Deep overlay for high contrast

  contentContainer: {
    flex: 1,
    paddingHorizontal: 35,
    justifyContent: "space-between",
    paddingVertical: 70,
  },

  // Header
  header: { alignItems: "center", marginTop: 30 },
  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  brandTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: 2.5,
    textTransform: "uppercase",
  },
  brandTagline: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 13,
    marginTop: 8,
    fontWeight: "500",
  },

  // Form (Glassmorphism)
  formContainer: { borderRadius: 30, overflow: "hidden" }, // Crucial for BlurView corners
  blurView: { padding: 30, borderRadius: 30 },

  welcomeText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "800",
    marginBottom: 35,
    textAlign: "center",
    letterSpacing: 1,
  },
  // Style pour le bouton Retour
  backButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 60 : 40, // S'adapte à la barre de statut
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.15)", // Effet de verre léger
    borderRadius: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)", // Very transparent input bg
    borderRadius: 18,
    marginBottom: 20,
    paddingHorizontal: 20,
    height: 65,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  inputIcon: { marginRight: 15 },
  input: { flex: 1, color: "#fff", fontSize: 16 },

  loginBtn: {
    backgroundColor: "#FF6B6B",
    height: 65,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: 1,
  },

  forgotBtn: { marginTop: 25, alignSelf: "center" },
  forgotText: { color: "rgba(255,255,255,0.6)", fontSize: 13 },

  // Footer
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  noAccountText: { color: "rgba(255,255,255,0.8)", fontSize: 15 },
  signUpText: { color: "#FF6B6B", fontSize: 15, fontWeight: "900" },
});
