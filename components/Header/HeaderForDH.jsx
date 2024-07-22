import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Bell from "../../Icons/BellIC";
import "tailwindcss/tailwind.css";
import SearchBar from "../Home/SearchBar";
import { useNavigation } from "@react-navigation/native";

const Header = ({ screenName, activeSender, setActiveSender }) => {
  const navigation = useNavigation();

  const setActiveSenderTrue = () => {
    setActiveSender(true);
  };
  const setActiveSenderFalse = () => {
    setActiveSender(false);
  };

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View className="flex flex-col h-auto pt-16  px-6 z-50 bg-white gap-y-4">
      <View className="flex flex-row relative justify-center items-center  ">
        <View className="flex-1">
          <Text className="font-bold text-3xl text-[#1c1c1c]">
            {screenName}
          </Text>
        </View>
        <View className="flex  flex-row gap-[8px]">
          <Bell fill="#1c1c1c" />
          <TouchableOpacity onPress={() => handleNavigation("Profile")}>
            <Image
              className="w-6 h-6 rounded-full"
              source={require("../../Icons/ThrisAylin.png")}
              style={styles.border}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <SearchBar />
      </View>
      <View className="flex flex-row">
        <TouchableOpacity
          onPress={setActiveSenderTrue}
          activeOpacity={1}
          className={
            activeSender
              ? "flex flex-1 justify-center items-center h-16 border-solid border-b-2 border-b-[#03A63C]"
              : "flex flex-1 justify-center items-center h-16"
          }
        >
          <View className="">
            <Text
              className={
                activeSender
                  ? "text-lg font-semibold"
                  : "text-lg text-[#808080]"
              }
            >
              Đơn gửi
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={setActiveSenderFalse}
          activeOpacity={1}
          className={
            !activeSender
              ? "flex flex-1 justify-center items-center h-16 border-solid border-b-2 border-b-[#03A63C]"
              : "flex flex-1 justify-center items-center h-16"
          }
        >
          <View>
            <Text
              className={
                !activeSender
                  ? "text-lg font-semibold"
                  : "text-lg text-[#808080]"
              }
            >
              Đơn nhận
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: "white", // Set the border color
    borderWidth: 1, // Set the border width
  },
  shadow: {
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
  },
});

export default Header;
