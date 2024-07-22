import React from "react";
import { StyleSheet, View } from "react-native";

import Step2 from "./Main/Step2";
import HeaderForStack from "../components/Header/HeaderForStack";

export default function CreateStep2({ navigation }) {
  const nameHeader = "Chọn dịch vụ";
  return (
    <View style={styles.container}>
      <HeaderForStack screenName={"Chọn dịch vụ"} />
      <Step2 navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
