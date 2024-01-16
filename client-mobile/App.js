import MainNavigation from "./navigation/mainNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}