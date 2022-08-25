import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "./assets/scenes/Home";
import Login from "./assets/scenes/Login";
import Logout from "./assets/scenes/Logout";
import Signup from "./assets/scenes/Signup";
import Lights from "./assets/scenes/Lights";
import SecurityLogin from "./assets/scenes/SecurityLogin";
import Start from "./assets/scenes/Start";
import Record from "./assets/scenes/Record";
import QRGenerator from "./assets/scenes/QRGenerator";
import About from "./assets/scenes/About";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
        headerMode="float"
        animation="fade"
      >
     
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Lights" component={Lights} />
        <Stack.Screen name="SecurityLogin" component={SecurityLogin} />
        <Stack.Screen name="Record" component={Record} />
        <Stack.Screen name="QRGenerator" component={QRGenerator} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
