import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import HeaderForDH from "../components/Header/HeaderForDH";
import "tailwindcss/tailwind.css";
import SenderView from "../components/Order/SenderOrder";
import ReceiverView from "../components/Order/ReceiverOrder";

const Order = ({route}) => {
  const [activeSender, setActiveSender] = useState(true);
  const {phone} = route.params || {};

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
          {activeSender ? <SenderView  phone={phone}/> : <ReceiverView  phone={phone}/>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Order;
