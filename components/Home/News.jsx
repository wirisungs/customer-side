import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Slider from "./Slider";
import "tailwindcss/tailwind.css";

const News = () => {
  return (
    <View className="flex flex-col w-full gap-y-4">
      <View>
        <Text className="mt-6" style={styles.head2}>
          Tin tức
        </Text>
      </View>
      <View className="py-0 w-full">
        <Slider className="w-full" />
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
});

export default News;
