import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "tailwindcss/tailwind.css";

// icons
import Dropdown from "../../Icons/Dropdown";

const EnterInput = ({ placeholder, unitCustom }) => {
  return (
    <View className="flex flex-row items-center mr-3">
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={10}
        placeholder={placeholder}
        className="w-[90px] h-[57px] px-6 border-2 border-solid border-[#e2e2e2] border-r-0 rounded-l-3xl"
      />
      <LinearGradient
        className="flex items-center justify-center w-[80px] h-[57px]  rounded-r-3xl"
        colors={["#04BF45", "#1C9546"]}
      >
        <TouchableOpacity className="flex flex-row">
          <Text className="text-white text-[16px]">
            {(unit = unitCustom || "cm")}
          </Text>
          <Dropdown fill="#fff" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EnterInput;
