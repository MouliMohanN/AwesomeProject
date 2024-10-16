import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {View, Pressable, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import FbWelcomeScreen from '../screens/FbWelcomeScreen';
import { HomeScreen } from '../screens/HomeScreen';


const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FbWelcome" component={FbWelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
