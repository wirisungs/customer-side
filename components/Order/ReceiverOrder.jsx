import React from "react";
import { StyleSheet, View } from "react-native";
import "tailwindcss/tailwind.css";
import OrderItem from "./OrderItem";

const ReceiverOrder = () => {
  return (
    <View className="flex gap-y-4">
      <View>
        <OrderItem />
      </View>
      <View>
        <OrderItem />
      </View>
      <View>
        <OrderItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReceiverOrder;
