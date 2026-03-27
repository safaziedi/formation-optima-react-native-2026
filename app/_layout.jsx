import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(dashboard)" />
        </Stack>
      </SafeAreaView>
  );
};

export default RootLayout;
