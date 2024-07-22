import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import "tailwindcss/tailwind.css";

import HeaderForStack from "../components/Header/HeaderForStack";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../components/Home/SearchBar";
import Map from "./Map";

const CheckPost = () => {
  return (
    <View className="h-full">
      <HeaderForStack screenName={"Tra cứu bưu cục"} />
      <Map />
      <LinearGradient
        className="flex absolute bottom-0 w-full pb-6 pt-6 px-6 rounded-t-3xl"
        colors={["#04BF45", "#1C9546"]}
      >
        <View className="flex gap-y-4">
          <View>
            <Text className="text-[20px] text-white font-bold">
              Tìm kiếm bưu cục
            </Text>
          </View>
          <View>
            <SearchBar />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CheckPost;
