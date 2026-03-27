import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get('window');
const COLUMN_WIDTH = (width - 60) / 2; // Calcul pour 2 colonnes avec marges

const RECIPES = [
  { id: '1', title: 'Pizza Artisanale', time: '20 min', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
  { id: '2', title: 'Salade', time: '10 min', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { id: '3', title: 'Burger', time: '15 min', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: '4', title: 'Sushi Rolls', time: '25 min', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400' },
];

export default function Explore() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.img }} style={styles.cardImg} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <View style={styles.timeTag}>
          <Ionicons name="time-outline" size={12} color="#64748b" />
          <Text style={styles.cardTime}>{item.time}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.heartBtn}>
        <Ionicons name="heart-outline" size={18} color="#FF6B6B" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Découvrir</Text>
        <Text style={styles.headerSubtitle}>Qu'allez-vous déguster aujourd'hui ?</Text>
      </View>

      <FlatList
        data={RECIPES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listPadding}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60 },
  header: { paddingHorizontal: 20, marginBottom: 20 },
  headerTitle: { fontSize: 32, fontWeight: '900', color: '#1e293b' },
  headerSubtitle: { fontSize: 16, color: '#64748b', marginTop: 5 },
  row: { justifyContent: 'space-between', paddingHorizontal: 20 },
  listPadding: { paddingBottom: 100 },
  card: { 
    backgroundColor: '#fff', 
    width: COLUMN_WIDTH, 
    borderRadius: 20, 
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    position: 'relative'
  },
  cardImg: { width: '100%', height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  cardInfo: { padding: 12 },
  cardTitle: { fontWeight: '800', fontSize: 14, color: '#1e293b' },
  timeTag: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  cardTime: { fontSize: 12, color: '#64748b', marginLeft: 4 },
  heartBtn: { 
    position: 'absolute', 
    top: 10, 
    right: 10, 
    backgroundColor: '#fff', 
    padding: 6, 
    borderRadius: 12,
    elevation: 3
  }
});