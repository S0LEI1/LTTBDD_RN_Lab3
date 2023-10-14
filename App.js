import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './src/screen/Screen_01';
import Screen_02 from './src/screen/Screen_02';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Screen_01} />
        <Stack.Screen name="Selection" component={Screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

