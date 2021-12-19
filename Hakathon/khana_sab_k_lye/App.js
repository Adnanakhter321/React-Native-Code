import Routes from './src/configs/Routes';
import Store from './Store'
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={Store}>
      <PaperProvider>
        <SafeAreaProvider >
         <NavigationContainer>
         <Routes />
         </NavigationContainer>
        </SafeAreaProvider >
      </PaperProvider>
    </Provider>

  );
}
