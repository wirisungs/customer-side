import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import "tailwindcss/tailwind.css";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

// icons
import Back from "../../Icons/Back";

const HeaderForStack = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      className="flex flex-row relative justify-center items-center pt-16 pb-6 px-6 z-50 rounded-b-3xl"
      colors={["#04BF45", "#1C9546"]}
      style={styles.shadow}
    >
      <View className="flex flex-1 flex-row justify-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <View className="flex flex-row flex-1 justify-center items-center">
          <Text className="font-bold text-3xl text-white ">{screenName}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#1c1c1c",
    shadowOffset: {
      width: 0,
      height: 0, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default HeaderForStack;
