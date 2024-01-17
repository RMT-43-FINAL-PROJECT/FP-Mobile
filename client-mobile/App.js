import MainNavigation from "./navigation/mainNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./screens/login";
import OrderList from "./screens/storeList";
import * as Font from 'expo-font';
import { useEffect, useState } from "react";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Mulish-Regular': require('./fonts/Mulish-Regular.ttf'),
        'Mulish-SemiBold': require('./fonts/Mulish-SemiBold.ttf'),
        'Mulish-Bold': require('./fonts/Mulish-Bold.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    );
  }
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}