import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {
//   SafeAreaView
// } from 'react-native-safe-area-context';



import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <>
      <StatusBar style="light" />


      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: 'All Categories'
          }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
          <Stack.Screen name="MealDetail" component={MealDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
