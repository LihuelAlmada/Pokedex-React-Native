import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
