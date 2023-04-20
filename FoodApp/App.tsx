import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultsDisplayScreen from './src/screens/ResultsDisplayScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions = {{headerShown:false}}>
        <Stack.Screen
            name="Home"
            component = {HomeScreen}
            
          />
        <Stack.Screen
            name="Search"
            component = {SearchScreen}
        />
        <Stack.Screen
            name="ResultDisplay"
            component = {ResultsDisplayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})