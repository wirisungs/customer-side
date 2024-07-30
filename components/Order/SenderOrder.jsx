import React from "react";
import { StyleSheet, View, Text } from "react-native";
import "tailwindcss/tailwind.css";
import OrderItem from "./OrderItem";

const SenderOrder = ({phone}) => {
  return (
    <View className="flex gap-y-4">
      <View>
        <OrderItem phone={phone}/>
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

export default SenderOrder;
