import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './src/navigation'
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation/>
      <StatusBar style="auto" />
    </SafeAreaProvider>

  );
}

