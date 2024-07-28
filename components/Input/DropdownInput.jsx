import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Dropdown from "../../Icons/Dropdown";
import "tailwindcss/tailwind.css";
// Icons
import CloseIC from "../../Icons/Close";

const DropdownInput = ({ Placeholder }) => {
  return (
    <View className=" flex flex-row items-center border-solid border-2 border-[#e2e2e2] rounded-2xl w-full p-3 mt-[6px] ">
      <TextInput placeholder={Placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  content: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#1c1c1c",
  },
});

export default DropdownInput;
