import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Dropdown from "../../Icons/Dropdown";
import "tailwindcss/tailwind.css";

const DropdownInput = ({ Placeholder }) => {
  return (
    <View className=" flex flex-row items-center border-solid border-2 border-[#e2e2e2] rounded-2xl w-full p-3 mt-[6px] ">
      <View className="flex-1">
        <Text className="text-[#808080]">{Placeholder}</Text>
      </View>
      <TouchableOpacity>
        <Dropdown fill="#808080" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default DropdownInput;
