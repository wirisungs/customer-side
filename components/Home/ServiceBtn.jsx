import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import "tailwindcss/tailwind.css";

// icons
import CalIC from "../../Icons/Calculator";
import PostIC from "../../Icons/Post";
import VoucherIC from "../../Icons/Voucher02";
import { useNavigation } from "@react-navigation/native";

const ServiceBtn = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View className="flex flex-col mt-6 gap-y-4">
      <View>
        <Text style={styles.head2}>Chức năng</Text>
      </View>
      <View className="flex flex-row gap-x-8 px-1">
        <TouchableOpacity
          onPress={() => handleNavigation("TraCuocPhi")}
          activeOpacity={1}
          className="pl-2"
        >
          <View className="w-16 flex flex-col gap-[6px] items-center drop-shadow-md">
            <View
              className="w-16 h-16 rounded-3xl flex drop-shadow-lg items-center justify-center"
              style={styles.bgcolor}
            >
              <CalIC fill="#03CE49" />
            </View>
            <Text className="flex flex-wrap max-w-full text-center">
              Tra tính cước phí
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleNavigation("CheckPost")}
          activeOpacity={1}
        >
          <View className="w-16 flex flex-col gap-[6px] items-center">
            <View
              className="w-16 h-16 rounded-3xl flex drop-shadow-lg items-center justify-center"
              style={styles.bgcolor}
            >
              <PostIC fill="#03CE49" />
            </View>
            <Text className="flex flex-wrap max-w-full text-center">
              Tra cứu bưu cục
            </Text>
          </View>
        </TouchableOpacity>

        <View className="w-16 flex flex-col gap-[6px] items-center">
          <View
            className="w-16 h-16 rounded-3xl flex drop-shadow-lg items-center justify-center"
            style={styles.bgcolor}
          >
            <VoucherIC fill="#03CE49" width={36} height={36} />
          </View>
          <Text className="flex flex-wrap max-w-full text-center">
            Mã giảm giá
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  bgcolor: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // This is for Android to show elevation
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

export default ServiceBtn;
