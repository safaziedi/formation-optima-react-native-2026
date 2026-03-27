import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF6B6B",
        tabBarStyle: { height: 60, paddingBottom: 10 },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Découvrir",
          tabBarIcon: ({ color }) => (
            <Ionicons name="restaurant" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Mon Profil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
