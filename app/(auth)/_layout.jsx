import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <>
      {/* pour afficher l'heure , batterie , wifi ... */}
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }}></Stack>
    </>
  );
};

export default AuthLayout;