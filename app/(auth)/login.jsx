import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions, KeyboardAvoidingView, Platform, StatusBar } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur'; // Verrrry Important: npx expo install expo-blur

// Get screen dimensions for perfect scaling
const { width, height } = Dimensions.get('window');

// Premium image from Unsplash (rustic/appetizing cuisine)
const CUISINE_IMAGE = 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?q=80&w=1000';

export default function VerrryFancyLogin() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={{ uri: CUISINE_IMAGE }} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Dark overlay for text readability and premium feel */}
        <View style={styles.darkOverlay}>
          
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.contentContainer}
          >
            
            {/* 1. TOP BRANDING AREA */}
            <View style={styles.header}>
              <View style={styles.iconCircle}>
                <Ionicons name="restaurant" size={35} color="#FF6B6B" />
              </View>
              <Text style={styles.brandTitle}>QuickBite</Text>
              <Text style={styles.brandTagline}>L'Art de Bien Manger, Rapidement.</Text>
            </View>

            {/* 2. THE GLASSMORPHISM FORM (Refined Glass effect) */}
            <View style={styles.formContainer}>
              {/* BlurView provides the frosty glass effect */}
              <BlurView intensity={Platform.OS === 'ios' ? 40 : 80} tint="dark" style={styles.blurView}>
                
                <Text style={styles.welcomeText}>Connexion</Text>
                
                {/* Input 1: Email */}
                <View style={styles.inputWrapper}>
                  <Ionicons name="mail-outline" size={20} color="rgba(255,255,255,0.6)" style={styles.inputIcon} />
                  <TextInput 
                    placeholder="Votre Email" 
                    placeholderTextColor="rgba(255,255,255,0.4)" 
                    style={styles.input} 
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                {/* Input 2: Password */}
                <View style={styles.inputWrapper}>
                  <Ionicons name="lock-closed-outline" size={20} color="rgba(255,255,255,0.6)" style={styles.inputIcon} />
                  <TextInput 
                    placeholder="Votre Mot de passe" 
                    placeholderTextColor="rgba(255,255,255,0.4)" 
                    secureTextEntry 
                    style={styles.input} 
                  />
                </View>

                {/* Submit Button (Fancy Glow/Shadow) */}
                <TouchableOpacity style={styles.loginBtn} onPress={() => router.push('/explore')}>
                  <Text style={styles.loginBtnText}>Déguster !</Text>
                  <Ionicons name="chevron-forward" size={20} color="#fff" style={{ marginLeft: 10 }} />
                </TouchableOpacity>

                {/* Extra Actions */}
                <TouchableOpacity style={styles.forgotBtn}>
                  <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
                </TouchableOpacity>

              </BlurView>
            </View>

            {/* 3. FOOTER (CTA to Register) */}
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
  );
}

/** 🎨 STYLES - Verry Fancy & Immersive **/
const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { width: width, height: height },
  darkOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }, // Deep overlay for high contrast
  
  contentContainer: { flex: 1, paddingHorizontal: 35, justifyContent: 'space-between', paddingVertical: 70 },
  
  // Header
  header: { alignItems: 'center', marginTop: 30 },
  iconCircle: { width: 75, height: 75, borderRadius: 37.5, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  brandTitle: { color: '#fff', fontSize: 34, fontWeight: '900', letterSpacing: 2.5, textTransform: 'uppercase' },
  brandTagline: { color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 8, fontWeight: '500' },

  // Form (Glassmorphism)
  formContainer: { borderRadius: 30, overflow: 'hidden' }, // Crucial for BlurView corners
  blurView: { padding: 30, borderRadius: 30 },
  
  welcomeText: { color: '#fff', fontSize: 26, fontWeight: '800', marginBottom: 35, textAlign: 'center', letterSpacing: 1 },
  
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)', // Very transparent input bg
    borderRadius: 18,
    marginBottom: 20,
    paddingHorizontal: 20,
    height: 65,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  inputIcon: { marginRight: 15 },
  input: { flex: 1, color: '#fff', fontSize: 16 },
  
  loginBtn: {
    backgroundColor: '#FF6B6B',
    height: 65,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    // Fancy Shadow/Glow
    shadowColor: "#FF6B6B",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
  },
  loginBtnText: { color: '#fff', fontSize: 19, fontWeight: '800', letterSpacing: 1 },
  
  forgotBtn: { marginTop: 25, alignSelf: 'center' },
  forgotText: { color: 'rgba(255,255,255,0.6)', fontSize: 13 },

  // Footer
  footer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingBottom: 20 },
  noAccountText: { color: 'rgba(255,255,255,0.8)', fontSize: 15 },
  signUpText: { color: '#FF6B6B', fontSize: 15, fontWeight: '900' }
});