import { StyleSheet, Text, View,Image } from "react-native";
import Logo from "../assets/img/logo.jpg";
import { Link } from "expo-router";
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style = {styles.img}/>
      <View style={styles.card}>
        <Link href="/about">About Page</Link>
      </View>
      <View style={styles.card}>
        <Link href="/contact">Contact Page</Link>
      </View>
      <View style={styles.card}>
        <Link href="/login">Login Page</Link>
      </View>
      <View style={styles.card}>
        <Link href="/register">Register Page</Link>
      </View>

      <View style={styles.card}>
        <Link href="/profile">Profile</Link>
      </View>
      <View style={styles.card}>
        <Link href="/books">Books</Link>
      </View>
      <View style={styles.card}>
        <Link href="/createBook">Add book</Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    marginTop: 4,
    borderRadius:5,
    boxShadow: '4px 4px rgba(0,0,0,0)'
  },
  img:{
    marginVertical : 4
  }
});
