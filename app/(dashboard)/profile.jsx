import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
        <Text style={styles.userName}>Chef Gourmet</Text>
        <Text style={styles.userBio}>Passionné de cuisine italienne 🍝</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.stat}><Text style={styles.statNum}>12</Text><Text style={styles.statLabel}>Favoris</Text></View>
        <View style={styles.stat}><Text style={styles.statNum}>5</Text><Text style={styles.statLabel}>Avis</Text></View>
      </View>

      <Link href="/" asChild>
        <TouchableOpacity style={styles.btnLogout}><Text style={{color: '#FF6B6B', fontWeight: '700'}}>Se déconnecter</Text></TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingTop: 100 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  userName: { fontSize: 24, fontWeight: '800' },
  userBio: { color: '#999', marginTop: 5 },
  statsRow: { flexDirection: 'row', marginTop: 40, width: '100%', justifyContent: 'space-around' },
  statNum: { fontSize: 20, fontWeight: '800', textAlign: 'center' },
  statLabel: { color: '#999' },
  btnLogout: { marginTop: 100, padding: 20 }
});