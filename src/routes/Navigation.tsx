import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { Home } from "../screens/Home";
import { Welcome } from "../screens/Welcome";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>   
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="welcome" component={Welcome} />
        </Stack.Navigator>
    </NavigationContainer>      
  );
}