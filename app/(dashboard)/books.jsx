import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  Image, 
  TextInput, 
  TouchableOpacity, 
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'L\'Étranger',
    author: 'Albert Camus',
    category: 'Philosophie',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    rating: '4.8',
  },
  {
    id: '2',
    title: 'Le Petit Prince',
    author: 'Antoine de Saint-Exupéry',
    category: 'Conte',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
    rating: '5.0',
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopie',
    image: 'https://images.unsplash.com/photo-1543004218-ee141104638e?w=400',
    rating: '4.7',
  },
];

const Books = () => {
  const [search, setSearch] = useState('');

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookCard}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      
      <View style={styles.bookDetails}>
        <View>
          <Text style={styles.categoryLabel}>{item.category}</Text>
          <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.bookAuthor}>{item.author}</Text>
        </View>

        <View style={styles.footerRow}>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
          <TouchableOpacity style={styles.readButton}>
            <Text style={styles.readButtonText}>Voir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Ma Bibliothèque</Text>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput 
            style={styles.searchInput}
            placeholder="Rechercher un livre..."
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderBookItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  bookImage: {
    width: 100,
    height: 140,
    borderRadius: 15,
  },
  bookDetails: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  categoryLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#F59E0B',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    lineHeight: 22,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
  readButton: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  readButtonText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});