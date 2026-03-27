import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
        }}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          <Text style={styles.logoText}>QuickBite 🍽️</Text>
          <Text style={styles.heroTitle}>
            Cuisinez comme un Chef en 15 min.
          </Text>

          <Link href="/register" asChild>
            <TouchableOpacity style={styles.btnPrimary}>
              <Text style={styles.btnText}>Commencer l'aventure</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/login" asChild>
            <TouchableOpacity style={styles.btnSecondary}>
              <Text style={styles.btnTextSecondary}>
                Déjà membre ? Se connecter
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Suggestions du jour</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RecipeCard
            title="Pasta Pesto"
            time="12 min"
            img="https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400"
          />
          <RecipeCard
            title="Salmon Bowl"
            time="20 min"
            img="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400"
          />
        </ScrollView>
      </View>
    </View>
  );
}

const RecipeCard = ({ title, time, img }) => (
  <View style={styles.card}>
    <ImageBackground
      source={{ uri: img }}
      style={styles.cardImg}
      imageStyle={{ borderRadius: 15 }}
    >
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardTime}>⏱️ {time}</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  hero: { width: "100%", height: 500 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
    padding: 30,
    paddingBottom: 60,
  },
  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    position: "absolute",
    top: 60,
    left: 30,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 30,
  },
  btnPrimary: {
    backgroundColor: "#FF6B6B",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  btnSecondary: {
    backgroundColor: "transparent",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
  btnTextSecondary: { color: "#fff", fontWeight: "600" },
  content: { padding: 25 },
  sectionTitle: { fontSize: 20, fontWeight: "800", marginBottom: 20 },
  card: { width: 200, height: 150, marginRight: 15 },
  cardImg: { width: "100%", height: "100%" },
  cardOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 15,
    padding: 15,
    justifyContent: "flex-end",
  },
  cardTitle: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  cardTime: { color: "#eee", fontSize: 12 },
});
