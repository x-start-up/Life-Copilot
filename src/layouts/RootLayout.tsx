import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from 'expo-router'
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView className="h-screen w-screen bg-white">
        <StatusBar style="auto"></StatusBar>
        <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}