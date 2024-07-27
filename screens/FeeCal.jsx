import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Modal } from "react-native";
import "tailwindcss/tailwind.css";
import HeaderForStack from "../components/Header/HeaderForStack";
import DropdownInput from "../components/Input/DropdownInput";
import { TouchableOpacity } from "react-native-gesture-handler";

// icons
import EnterInput from "../components/Input/EnterInput";
import Tick from "../Icons/Tick";
import Checkbox from "../components/Input/Checkbox";
import Button from "../components/Buttons/Button";

const FeeCal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View className="flex flex-1">
      <HeaderForStack screenName="Tra tính cước phí" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <Text>uhfsbegfubu</Text>
        </View>
      </Modal>
      <ScrollView className="mt-[6px] p-6 h-full bg-white rounded-3xl">
        <View>
          <View className="content flex flex-col gap-[8px]">
            <View className="flex flex-row title">
              <Text style={styles.header3}>Khoảng cách</Text>
              <Text className="ml-2 text-[20px] text-[#BF0A04]">*</Text>
            </View>
            <View className="inputContainer flex flex-rol">
              <View className="flex flex-col title gap-y-[6px]">
                <View>
                  <Text style={styles.content}>Nơi gửi</Text>
                </View>
                <View className="flex">
                  <DropdownInput Placeholder={"Tỉnh / Thành"} />
                  <DropdownInput Placeholder={"Quận / Huyện"} />
                </View>
              </View>
              <View className="flex flex-col title gap-y-[6px] mt-4">
                <View>
                  <Text style={styles.content}>Nơi nhận</Text>
                </View>
                <View className="flex">
                  <DropdownInput Placeholder={"Tỉnh / Thành"} />
                  <DropdownInput Placeholder={"Quận / Huyện"} />
                </View>
              </View>
            </View>
          </View>
          <View className="content flex flex-col gap-[8px] mt-6">
            <View className="flex flex-row title mb-[6px]">
              <Text style={styles.header3}>Kích thước & khối lượng</Text>
            </View>
            <View className="inputContainer flex flex-row mb-1">
              <View>
                <EnterInput placeholder={"Nặng"} unitCustom={"g"} />
              </View>
              <View>
                <EnterInput placeholder={"Cao"} />
              </View>
            </View>

            <View className="inputContainer flex flex-row">
              <View>
                <EnterInput placeholder={"Dài"} />
              </View>
              <View>
                <EnterInput placeholder={"Rộng"} />
              </View>
            </View>

            <View className="checkBox flex flex-row">
              <View className="flex-1">
                <Checkbox Content={"Thu hộ phí COD"} />
              </View>
            </View>
          </View>
          <Button screenName={"Service"} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  content: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#1c1c1c",
  },
});

export default FeeCal;
