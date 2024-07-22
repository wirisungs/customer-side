import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import "tailwindcss/tailwind.css";

// icons
import Tick from "../../Icons/Tick";

const Checkbox = ({ Content }) => {
  const [isActive, setActive] = useState(false);
  const checkBoxHandle = () => {
    setActive(!isActive);
  };
  return (
    <View className="flex flex-1 flex-row items-center">
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => checkBoxHandle()}
        className="flex justify-center items-center h-4 w-4 border-2 border-solid border-[#04BF45] rounded-[5px] mr-4"
      >
        {isActive ? <Tick width="16" height="16" fill="#04BF45" /> : ""}
      </TouchableOpacity>
      <Text className="text-[#808080]">{Content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Checkbox;
