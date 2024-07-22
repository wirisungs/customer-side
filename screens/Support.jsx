import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header/Header";
import "tailwindcss/tailwind.css";

// Icons
import FastBtn from "../components/Support/FastBtn";
import SupportRequest from "../components/Support/SupportRequest";

const Support = ({ title }) => {
  title = "Trợ giúp";
  return (
    <View className="bg-[#fff] ">
      <Header screenName={title} />
      <ScrollView className="w-full h-full">
        {/* Box 1 */}
        <FastBtn />
        {/* Line */}
        <View className="bg-[#F3f4f6] h-[8px]"></View>
        {/* Box 2 */}
        <SupportRequest />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#808080",
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: "#03A63C",
    shadowOffset: {
      width: 0,
      height: 1, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default Support;
