import React from "react";
import { StyleSheet, View, Text } from "react-native";
import "tailwindcss/tailwind.css";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Button = ({ screenName, buttonName }) => {
  const navigatetion = useNavigation();
  const handleNavigation = (screenName) => {
    navigatetion.navigate(screenName);
  };

  const checkButtonName = () => {};
  return (
    <TouchableOpacity onPress={() => handleNavigation(screenName)}>
      <LinearGradient
        className="mt-8 p-3 flex flex-row relative justify-center items-center rounded-3xl"
        colors={["#04BF45", "#1C9546"]}
      >
        <Text className="text-white text-[20px] font-bold">
          {buttonName || "Hoàn thành"}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default Button;
