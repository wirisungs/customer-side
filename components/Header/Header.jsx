import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Bell from "../../Icons/BellIC";
import "tailwindcss/tailwind.css";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Header = ({ screenName }) => {
  const navigation = useNavigation();

  const ToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <View className={screenName == "Trợ giúp" ? "bg-[#D5F3DF]" : "bg-white"}>
      <LinearGradient
        className=" flex flex-row relative justify-center items-center pt-16 pb-6 px-6 z-50 rounded-b-3xl"
        colors={["#04BF45", "#1C9546"]}
      >
        <View className="flex-1 ">
          <Text className="font-bold text-3xl text-white">{screenName}</Text>
        </View>
        <View className="flex flex-row gap-[8px]">
          <Bell />
          <TouchableOpacity onPress={ToProfile}>
            <Image
              className="w-6 h-6 rounded-full"
              source={require("../../Icons/ThrisAylin.png")}
              style={styles.border}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: "white", // Set the border color
    borderWidth: 1, // Set the border width
  },
  shadow: {
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
  },
});

export default Header;
