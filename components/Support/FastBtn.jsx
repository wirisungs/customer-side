import React from "react";
import { Touchable } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import "tailwindcss/tailwind.css";

const FastBtn = ({navigation,route}) => {
  const { phone } = route.params;
  return (
    <View className="flex pt-12 pb-6 px-6 m-0 bg-[#D5F3DF]">
      <View className="FastBtnContainer flex flex-col w-full h-auto gap-y-[6px]">
        <View className="flex flex-row gap-x-[6px]">
          <View
            className="flex flex-1 items-center justify-center bg-white h-16 rounded-tl-3xl"
            style={styles.shadow}
          >
            <Text className="">Chính sách</Text>
          </View>
          <View
            className="flex flex-1  items-center justify-center bg-white h-16 rounded-tr-3xl"
            style={styles.shadow}
          >
            <Text className="">Thông tin ứng dụng</Text>
          </View>
        </View>
        <View
          style={styles.shadow}
          className="mt-0 ml-0 flex items-center justify-center bg-white h-16 rounded-b-3xl"
        >
          <TouchableOpacity  onPress={() => navigation.navigate("TestPush",{phone})}>
          <Text>Nhắn tin với nhân viên hỗ trợ</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#808080",
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  shadow: {
    shadowColor: "#03A63C",
    shadowOffset: {
      width: 0,
      height: 1, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default FastBtn;
