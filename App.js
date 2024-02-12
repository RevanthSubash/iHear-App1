import React, { Component } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignIn';

const Stack = createStackNavigator();


export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>

    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    )
  }
}