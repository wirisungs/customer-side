import React from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import "tailwindcss/tailwind.css";

const SearchBar = () => {
  const [value, onChangeText] = React.useState("Nhập mã đơn hàng");
  return (
    <View className="flex flex-row items-center w-full" style={styles.shadow}>
      <TextInput
        editable
        numberOfLines={1}
        maxLength={10}
        placeholder="Nhập mã đơn hàng"
        onChangeText={(text) => onChangeText(text)}
        className="w-full h-[57px] px-6 bg-[#f3f4f6] rounded-3xl"
      />
      <Image
        className="absolute right-6"
        source={require("../../Icons/Find.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SearchBar;
