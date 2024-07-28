import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import "tailwindcss/tailwind.css";
import Header from "../components/Header/Header";

// Icons
import SearchBar from "../components/Home/SearchBar";
import ServiceBtn from "../components/Home/ServiceBtn";
import News from "../components/Home/News";

const Home = ({ navigation,route }) => {
  const { phone } = route.params;
  const title = "Trang chủ";
  return (
    <View className="relative bg-[#fefefe] h-[100%]">
      <Header screenName={title} />
      <ScrollView className="relative w-full px-6 gap-y-6">
        <View className="pt-6">
          <SearchBar />
        </View>
        <View className>
          <ServiceBtn />
          {/* <Text>{phone}</Text> */}
        </View>
        <News />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: "#1c1c1c", // Set the border color
    borderWidth: 1, // Set the border width
    borderRadius: 24,
  },
});

export default Home;
