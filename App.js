import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GetStarted from './app/GetStarted';
import AppNavigation from './navigation/appNavigation';

export default function App() {
  return ( 
    <AppNavigation /> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
