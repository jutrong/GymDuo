import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screen/LoginScreen";
import SignupScreen from "./screen/SignupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      "noto-sanas": require("./assets/fonts/NotoSansKR-VariableFont_wght.ttf"),
      "roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
      "roboto-Mono": require("./assets/fonts/RobotoMono-VariableFont_wght.ttf"),
    });
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    const loadFonts = async () => {
      await fetchFonts();
      setFontsLoaded(true);

      SplashScreen.hideAsync();
    };
    loadFonts();
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#1C1C28",
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
