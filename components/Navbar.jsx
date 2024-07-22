import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import "tailwindcss/tailwind.css";
import HomeIC from "../Icons/Home";
import Plus from "../Icons/plus";
import Box from "../Icons/Box";
import Voucher from "../Icons/voucher";
import Support from "../Icons/support";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const Navbar = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState();

  const handleNavigation = (screenName) => {
    setActiveTab(screenName);
    navigation.navigate(screenName);
  };
  return (
    <View
      className="absolute flex items-center bottom-0 p-4 w-full box-border"
      style={styles.container}
    >
      <View className="flex flex-row w-full gap-7 justify-center items-center">
        <View className="flex flex-col items-center gap-[6px]">
          <HomeIC />
          <Text className="text-[10px]">Trang chủ</Text>
        </View>
        <View className="flex flex-col items-center gap-[6px]">
          <Box />
          <Text className="text-[10px]">Đơn hàng</Text>
        </View>
        <LinearGradient
          className="flex w-16 h-10 items-center justify-center rounded-3xl"
          colors={["#04BF45", "#1C9546"]}
        >
          <Plus style={"color: white"} />
        </LinearGradient>
        <View className="flex flex-col items-center gap-[6px]">
          <Voucher />
          <Text className="text-[10px]">Ưu đãi</Text>
        </View>
        <View className="flex flex-col items-center gap-[6px]">
          <Support />
          <Text className="text-[10px]">Trợ giúp</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15, // Đặt shadow lên trên
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
  },
});

export default Navbar;
