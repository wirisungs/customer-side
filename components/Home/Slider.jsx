import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import "tailwindcss/tailwind.css";

const Slider = () => {
  return (
    <ScrollView className="w-full" horizontal={true}>
      <Image
        className="w-1/2 h-48 object-fill rounded-3xl"
        source={require("../../Icons/Art1.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Slider;
