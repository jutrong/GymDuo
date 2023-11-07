import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import LoginScreen from "./screen/loginScreen";

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

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <LoginScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C28",
  },
});
