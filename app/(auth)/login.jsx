import { Link } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import useAuthStore from "../../store/authStore";
import { useMutation } from "@apollo/client/react";
import { Alert } from "react-native";
import LOGIN_MUTATION from "./../../graphql/mutations/login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setAuth = useAuthStore((state) => state.setAuth);

  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      if (data.login.accessToken) {
        setAuth({
          accessToken: data.login.accessToken,
          email: email,
        });
      }
    },
    onError: (error) => {
      Alert.alert("Erreur", error.message || "Identifiants invalides");
    },
  });

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Champs vides", "Veuillez remplir tous les champs");
      return;
    }
    await loginMutation({
      variables: { email, password },
    });
  };
  return (
    //TouchableWithoutFeedback  pour fermer clavier si on press ailleur
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.inner}
        >
          {/* Logo ou Cercle Décoratif */}
          <View style={styles.logoContainer}>
            <View style={styles.circleDecoration} />
            <Text style={styles.welcomeText}>Bon retour !</Text>
            <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>
          </View>

          {/* Formulaire */}
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="votre@email.com"
                placeholderTextColor="#94a3b8"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>Mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#94a3b8"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>Oublié ?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text style={styles.loginButtonText}>
                {loading ? "Connexion..." : "Se connecter"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Pas encore de compte ? </Text>
            <TouchableOpacity>
              <Link href="/register" style={styles.signUpText}>
                S'inscrire
              </Link>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  inner: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: "flex-start",
  },
  circleDecoration: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#4F46E5", // Violet moderne
    marginBottom: 20,
    transform: [{ rotate: "45deg" }],
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1e293b",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 5,
  },
  formContainer: {
    width: "100%",
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#1e293b",
  },
  forgotPassword: {
    position: "absolute",
    right: 15,
    top: 38,
  },
  forgotText: {
    color: "#4F46E5",
    fontWeight: "600",
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  footerText: {
    color: "#64748b",
    fontSize: 14,
  },
  signUpText: {
    color: "#4F46E5",
    fontSize: 14,
    fontWeight: "700",
  },
});
