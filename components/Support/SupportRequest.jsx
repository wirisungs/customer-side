import React from "react";
import { StyleSheet, View, Text } from "react-native";
import "tailwindcss/tailwind.css";
import { LinearGradient } from "expo-linear-gradient";

// Icons
import WarningIC from "../../Icons/Warning";
import PhoneIC from "../../Icons/Phone";

const SupportRequest = () => {
  return (
    <View className="SupportBody pt-6 flex flex-col h-full bg-white px-6 py-4 gap-x-6">
      <View className="tab1 flex flex-col ">
        <View className="Title flex flex-row">
          <Text style={styles.header3}>Yêu cầu hỗ trợ</Text>
        </View>
        <View>
          <View className="flex flex-col w-full items-start pt-4 gap-y-2">
            {/* Item 1 */}
            <View className="YC flex flex-row justify-center items-center gap-2 text-base">
              <WarningIC fill="#F91313" />
              <Text style={styles.content}>Hàng của tôi bị lạc</Text>
            </View>

            {/* Item 2 */}
            <View className="YC flex flex-row justify-center items-center gap-2 text-base">
              <WarningIC fill="#F91313" />
              <Text style={styles.content}>Hàng của tôi bị vỡ</Text>
            </View>

            {/* Item 3 */}
            <View className="YC flex flex-row justify-center items-center gap-2 text-base">
              <WarningIC fill="#F91313" />
              <Text style={styles.content}>
                Hàng của tôi chưa được vận chuyển
              </Text>
            </View>

            {/* Item 4 */}
            <View className="YC flex flex-row justify-center items-center gap-2 text-base">
              <WarningIC fill="#F91313" />
              <Text style={styles.content}>
                Tôi chưa nhận được tiên khi hoàn tất đơn
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="tab1 flex flex-col mt-6 ">
        <View className="Title flex flex-row">
          <Text style={styles.header3}>Hotline</Text>
        </View>
        <View className="flex flex-row items-center justify-start mt-4 gap-x-4">
          <LinearGradient
            className="flex flex-row relative justify-center items-center w-8 h-8 rounded-3xl"
            colors={["#04BF45", "#1C9546"]}
          >
            <PhoneIC fill="#fff" />
          </LinearGradient>
          <Text style={styles.content}>19005566</Text>
        </View>
      </View>
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

export default SupportRequest;
