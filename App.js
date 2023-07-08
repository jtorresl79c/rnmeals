import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {
  SafeAreaView
} from 'react-native-safe-area-context';



import CategoriesScreen from './screens/CategoriesScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.rootScreen}>
        <Text>Open up App.js to start working on your app!</Text>
        <CategoriesScreen />
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
