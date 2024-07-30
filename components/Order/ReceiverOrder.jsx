import React from "react";
import { StyleSheet, View,Text } from "react-native";
import "tailwindcss/tailwind.css";
import OrderItem from "./OrderItem";

const ReceiverOrder = ({phone}) => {
  // const {phone} = route.params || {};
  return (
    <View className="flex gap-y-4"> 
      <View>
       
        <OrderItem phone={phone}/>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReceiverOrder;
