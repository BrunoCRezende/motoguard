import React, { useEffect } from "react";
import { StatusBar, Platform, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

import WelcomeScreen from "./screens/welcomeScreen";
import Register from "./screens/register";
import Login from "./screens/login";
import Password from "./screens/password";
import emergencyNum from "./screens/emergencyNum";

enableScreens(true); // ativa screens nativas para reduzir flash

const Stack = createNativeStackNavigator();

// Tema personalizado escuro
const MyTheme = { 
  ...DefaultTheme, 
  colors: {
    ...DefaultTheme.colors, 
    background: "#000",
  }
};

export default function App() {
  useEffect(() => {
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#1e1e1e");
      StatusBar.setBarStyle("light-content");
      StatusBar.setTranslucent(false); // importante para evitar flash
      if (typeof globalThis?.NavigationBar !== "undefined") {
        globalThis.NavigationBar.setColor("#1e1e1e", true);
      }
    }
  }, []);

  // Wrapper para garantir fundo em todas as telas
  const screenWrapper = (Component) => (props) => (
    <View style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <Component {...props} />
    </View>
  );

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="welcomeScreen"
        screenOptions={{
          headerShown: false,
          animation: "none",
          stackPresentation: "card",
          contentStyle: { backgroundColor: "#1e1e1e" },
          keyboardHandlingEnabled: false, // ⚡ aplica em todas as telas
        }}
      >
        <Stack.Screen
          name="welcomeScreen"
          component={screenWrapper(WelcomeScreen)}
        />
        <Stack.Screen
          name="register"
          component={screenWrapper(Register)}
          
        />
        <Stack.Screen
          name="login"
          component={screenWrapper(Login)}
        />
        <Stack.Screen
          name="password"
          component={screenWrapper(Password)}
        />
        <Stack.Screen
          name="emergencyNum"
          component={screenWrapper(emergencyNum)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
