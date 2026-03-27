import { Tabs } from "expo-router";
import { StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useSegments, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import useAuthStore from "../../store/authStore";

const DashboardLayout = () => {
  const { user } = useAuthStore();
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    // On attend que la navigation soit montée
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    // Utilisation d'un court délai pour éviter l'erreur de montage
    const timer = setTimeout(() => {
      if (!user && !inAuthGroup) {
        // Redirection vers login
        router.replace("/login");
      } else if (user && inAuthGroup) {
        // Redirection vers le dashboard
        router.replace("/books");
      }
    }, 1);

    return () => clearTimeout(timer);
  }, [user, segments, navigationState?.key]);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true, // Affiche le texte sous l'icône
        tabBarActiveTintColor: "#4F46E5", // Couleur de l'onglet actif (Violet)
        tabBarInactiveTintColor: "#94a3b8", // Couleur de l'onglet inactif
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      {/* Onglet Accueil / Books */}
      <Tabs.Screen
        name="books"
        options={{
          title: "Livres",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Onglet Ajouter (Bouton central) */}
      <Tabs.Screen
        name="createBook"
        options={{
          title: "Ajouter",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* Onglet Profil */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute", // Permet à la barre de flotter
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 65,
    // Ombre pour iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Ombre pour Android
    elevation: 5,
    borderTopWidth: 0, // Enlève la ligne de séparation grise par défaut
    paddingBottom: Platform.OS === "ios" ? 20 : 10,
    paddingTop: 10,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
  },
  tabBarItem: {
    // Vous pouvez ajuster l'espacement ici si nécessaire
  },
});
