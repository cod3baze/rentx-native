import React from "react";
import { StatusBar } from "expo-status-bar";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Scheduling } from "./src/screens/Scheduling";
import { AppProvider } from "./src/contexts/AppProvider";
import { SchedulingDetails } from "./src/screens/SchedulingDetails";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <StatusBar style="auto" />
      <SchedulingDetails />
    </AppProvider>
  );
}
