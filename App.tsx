import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="h-screen w-screen bg-white">
        <StatusBar style="auto"></StatusBar>
        <Home />
    </SafeAreaView>
  );
}
