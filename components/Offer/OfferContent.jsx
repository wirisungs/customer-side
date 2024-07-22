import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Banner1 from "../../Icons/Banner1";
import Banner2 from "../../Icons/Banner2";
import "tailwindcss/tailwind.css";

const OfferContent = () => {
  return (
    <View className="flex flex-col px-6 pt-6 gap-y-4">
      <View>
        <Text style={styles.head2}>Ưu đãi dịp khai trương</Text>
      </View>
      <View className="flex flex-row w-full gap-3">
        <Text>
          <Banner1 />
        </Text>
        <View className="flex flex-col">
          <Banner2 />
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default OfferContent;
