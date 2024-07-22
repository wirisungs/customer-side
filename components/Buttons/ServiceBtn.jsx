import React from "react";
import { StyleSheet, Text, View } from "react-native";
import "tailwindcss/tailwind.css";

const Service = ({ nameService, timeLine, Price }) => {
  return (
    <View className="flex flex-row w-full h-16">
      <View className="h-auto w-3 bg-[#F91313] rounded-l-2xl"></View>
      <View
        className="flex items-end  h-auto flex-1 flex-row bg-[#f8f8f8] rounded-r-2xl px-4 py-2"
        style={styles.shadow}
      >
        <View className="flex flex-col flex-1">
          <View className="flex-1">
            <Text style={styles.header2}>{nameService}</Text>
          </View>
          <View className="mt-[6px]">
            <Text style={styles.content}>
              Thời gian giao dự kiến: {timeLine} ngày
            </Text>
          </View>
        </View>
        <View className="Price flex">
          <Text className="text-[16px] font-bold">{Price}đ</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  header2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  content: {
    fontSize: 10,
    fontWeight: "regular",
    color: "#1c1c1c",
  },
  shadow: {
    shadowColor: "#1c1c1c",
    shadowOffset: {
      width: 0,
      height: 0, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default Service;
