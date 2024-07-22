import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "tailwindcss/tailwind.css";

// icons
import Back from "../../Icons/Back";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const HeaderForProfile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        className="flex flex-row relative justify-center items-center pt-16 pb-6 px-6 z-50 rounded-b-3xl"
        colors={["#04BF45", "#1C9546"]}
      >
        <View className="flex flex-row items-start">
          <View className="flex flex-1 gap-y-4">
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
            </View>
            <View className="flex flex-col">
              <View>
                <Text id="userName" className="text-white" style={styles.head1}>
                  Trần Hữu Minh Trí
                </Text>
              </View>
              <View>
                <Text className="text-white text-[14px]">
                  tranhuuminhtri0310@gmail.com
                </Text>
              </View>
            </View>
          </View>
          <View className="flex">
            <Image
              className="h-24 w-24 rounded-2xl"
              source={require("../../Icons/ThrisAylin.png")}
              style={styles.border}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },

  head2: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1c1c1c",
  },
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

export default HeaderForProfile;
