import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/Header/Header";
import "tailwindcss/tailwind.css";
import OfferContent from "../components/Offer/OfferContent";

const Offer = ({ title }) => {
  title = "Ưu đãi";
  return (
    <View className="relative bg-[#f3f4f6] h-full">
      <Header screenName={title} />
      <ScrollView className="bg-white w-full h-full mt-[6px] rounded-t-3xl">
        <OfferContent />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
});

export default Offer;
