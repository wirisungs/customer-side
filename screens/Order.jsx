import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import HeaderForDH from "../components/Header/HeaderForDH";
import "tailwindcss/tailwind.css";
import SenderView from "../components/Order/SenderOrder";
import ReceiverView from "../components/Order/ReceiverOrder";

const Order = () => {
  const [activeSender, setActiveSender] = useState(true);

  const title = "Đơn hàng";
  return (
    <View className="flex-1">
      <HeaderForDH
        screenName={title}
        activeSender={activeSender}
        setActiveSender={setActiveSender}
      />
      <ScrollView className="flex flex-1 px-6">
        <View className="flex py-6">
          {activeSender ? <SenderView /> : <ReceiverView />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Order;
