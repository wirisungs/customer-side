import React from "react";
import { StyleSheet, View } from "react-native";

import Step1 from "./Main/Step1";
import HeaderForStack from "../components/Header/HeaderForStack";

export default function CreateStep1({ navigation }) {
  const nameHeader = "Tạo đơn hàng";
  return (
    <View style={styles.container}>
      <HeaderForStack screenName={"Tạo đơn hàng"} />
      <Step1 navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
