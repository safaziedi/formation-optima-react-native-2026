import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  View 
} from 'react-native';
import useAuthStore from '../../store/authStore';

const Profile = () => {
  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header: Banner & Avatar */}
        <View style={styles.headerSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800' }} 
            style={styles.banner} 
          />
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400' }} 
              style={styles.avatar} 
            />
            <TouchableOpacity style={styles.editBadge}>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* User Info */}
        <View style={styles.detailsContainer}>
          <Text style={styles.userName}>Alexandre Dumas</Text>
          <Text style={styles.userTag}>@alex_lecteur</Text>
          <Text style={styles.userName}>{user?.email}</Text>
          <Text style={styles.bio}>
            Passionné de littérature classique et de science-fiction. 
            Toujours à la recherche d'une nouvelle aventure entre les pages.
          </Text>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Livres</Text>
            </View>
            <View style={[styles.statItem, styles.statBorder]}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>Abonnés</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>48</Text>
              <Text style={styles.statLabel}>Avis</Text>
            </View>
          </View>

          {/* Menu Options */}
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Text style={styles.menuEmoji}>👤</Text>
                <Text style={styles.menuText}>Modifier le profil</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Text style={styles.menuEmoji}>📚</Text>
                <Text style={styles.menuText}>Ma Liste d'envies</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Text style={styles.menuEmoji}>⚙️</Text>
                <Text style={styles.menuText}>Paramètres</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={logout}>
              <View style={styles.menuLeft}>
                <Text style={styles.menuEmoji}>🚪</Text>
                <Text style={[styles.menuText, styles.logoutText]}>Déconnexion</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerSection: {
    height: 200,
    alignItems: 'center',
  },
  banner: {
    width: '100%',
    height: 140,
  },
  avatarContainer: {
    position: 'absolute',
    top: 80,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  editBadge: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#4F46E5',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  editIcon: {
    fontSize: 14,
  },
  detailsContainer: {
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  userName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E293B',
  },
  userTag: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 15,
  },
  bio: {
    textAlign: 'center',
    color: '#475569',
    lineHeight: 20,
    marginBottom: 25,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    paddingVertical: 20,
    width: '100%',
    marginBottom: 30,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statBorder: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E2E8F0',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  menuContainer: {
    width: '100%',
    marginBottom: 40,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuEmoji: {
    fontSize: 20,
    marginRight: 15,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  arrow: {
    fontSize: 20,
    color: '#CBD5E1',
  },
  logoutItem: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  logoutText: {
    color: '#EF4444',
  },
});