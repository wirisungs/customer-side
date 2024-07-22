import React from "react";
import { StyleSheet, View, Text } from "react-native";
import "tailwindcss/tailwind.css";

const OrderItem = () => {
  return (
    <View
      className="h-auto w-full p-4 flex flex-col bg-white rounded-3xl"
      style={styles.shadow}
    >
      <View className="HeaderContainer flex flex-col">
        <Text className="OrderID" style={styles.head1}>
          GJDHLKID
        </Text>

        <Text className="OrderID" style={styles.status}>
          Đang đóng gói
        </Text>
      </View>

      <View className="line w-full h-[1px] my-2 bg-[#d9d9d9]" />

      {/* Info */}
      <View className="HeaderContainer flex flex-col">
        <Text className="OrderName" style={styles.info}>
          Tên hàng: Đồ chơi
        </Text>
        <Text className="OrderReceiver" style={styles.info}>
          Người nhận: Trí
        </Text>
        <Text className="PhoneNum" style={styles.info}>
          Số điện thoại: 0389105444
        </Text>
        <Text className="Adress" style={styles.info}>
          Địa chỉ: 37/15 Ấp 2 Nhà Bè
        </Text>
        <Text className="Adress" style={styles.info}>
          Note:
        </Text>
      </View>

      <View className="line w-full h-[1px] my-2 bg-[#d9d9d9]" />

      <View className="Total flex flex-row">
        <Text className="OrderID flex-1" style={styles.head2}>
          Tổng:
        </Text>
        <Text className="OrderID  " style={styles.head2}>
          3.222.333 vnđ
        </Text>
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

  head2: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1c1c1c",
  },

  status: {
    fontSize: 16,
    color: "#03A63C",
  },

  info: {
    fontSize: 18,
    color: "#808080",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 1,
    elevation: 1,
  },
});

export default OrderItem;
