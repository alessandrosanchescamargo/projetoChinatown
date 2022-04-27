import {  } from 'expo-status-bar';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Index from './src/tela/Index/Index';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Index/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
});
