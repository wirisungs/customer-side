import * as React from "react";
import { StyleSheet, View } from "react-native";
import RouteManager from "./components/Navbar/RouteManager";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./components/Home/HomeStack";

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
