import {
  Stack,
} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client/react";
import client from "../graphql/apolloClient";

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#f8f9fa" },
            headerTintColor: "#333",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="about" options={{ title: "À propos" }} />
          <Stack.Screen name="contact" options={{ title: "Contact" }} />
        </Stack>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default RootLayout;
