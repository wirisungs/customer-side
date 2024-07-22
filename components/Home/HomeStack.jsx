import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import FeeCal from "../../screens/FeeCal";
import RouteManager from "../Navbar/RouteManager";
import Service from "../../screens/Service";
import CheckPost from "../../screens/CheckPost";

const HomeStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        component={RouteManager}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="TraCuocPhi"
        component={FeeCal}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Service"
        component={Service}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="CheckPost"
        component={CheckPost}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeStack;
