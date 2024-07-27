import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderProfile from "../components/Header/HeaderForProfile";
import "tailwindcss/tailwind.css";

// icons
import User from "../Icons/User";
import BoxLine from "../Icons/OutlineIcons/BoxLine";
import Button from "../components/Buttons/Button";
import Map from "../Icons/Map";
import PostLine from "../Icons/OutlineIcons/PostLine";
import CalcuLine from "../Icons/OutlineIcons/CalLine";
import Warning from "../Icons/Warning";
import VoucherLine from "../Icons/OutlineIcons/VoucherLine";
import Policy from "../Icons/OutlineIcons/PolicyLine";
import Advertise from "../Icons/OutlineIcons/Advertise";
import TutoLine from "../Icons/OutlineIcons/TutoLine";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View>
      <HeaderProfile />
      <View className="flex flex-col bg-white mt-[6px] px-6 py-6 rounded-3xl h-full gap-y-6">
        {/* Tài khoản */}
        <View className="content flex flex-col gap-2">
          <View className="title">
            <Text style={styles.header3}>Tài khoản</Text>
          </View>
          <View className="accountContent flex flex-rol gap-y-2">
            <View className="box flex flex-row gap-x-2">
              <User />
              <Text style={styles.content}>Thông tin cá nhân & Bảo mật</Text>
            </View>
            <TouchableOpacity onPress={() => handleNavigation("OrderOfMe")}>
              <View className="box flex flex-row gap-x-2">
                <BoxLine troke={"#F91313"} width="24" height="24" />
                <Text style={styles.content}>Đơn hàng của bạn</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tiện ích */}

        <View className="content flex flex-col  gap-2">
          <View className="title">
            <Text style={styles.header3}>Tiện ích</Text>
          </View>
          <View className="accountContent flex flex-rol gap-y-2">
            <View className="box flex flex-row gap-x-2">
              <Map stroke={"#F91313"} />
              <Text style={styles.content}>Địa điểm đã lưu</Text>
            </View>
            <View className="box flex flex-row gap-x-2">
              <CalcuLine width="24" height="24" fill={"#F91313"} />
              <Text style={styles.content}>Tra tính cước phí</Text>
            </View>
            <View className="box flex flex-row gap-x-2">
              <PostLine width="24" height="24" />
              <Text style={styles.content}>Tra cứu bưu cục</Text>
            </View>
            <View className="box flex flex-row gap-x-2">
              <Warning fill={"#F91313"} width="24" height="24" />
              <Text style={styles.content}>Quản lý yêu cầu khiếu nại</Text>
            </View>
            <View className="box flex flex-row gap-x-2">
              <VoucherLine />
              <Text style={styles.content}>Ưu đãi</Text>
            </View>
          </View>
        </View>

        {/* Về chúng tôi */}

        <View className="content flex flex-col  gap-2">
          <View className="title">
            <Text style={styles.header3}>Về chúng tôi</Text>
          </View>
          <View className="accountContent flex flex-rol gap-y-2">
            <View className="box flex flex-row gap-x-2">
              <Policy />
              <Text style={styles.content}>Điều khoản</Text>
            </View>
            <View className="box flex flex-row gap-x-2">
              <Advertise />
              <Text style={styles.content}>Giới thiệu</Text>
            </View>
            <View className="box flex flex-row gap-x-2">
              <TutoLine />
              <Text style={styles.content}>Hướng dẫn sử dụng</Text>
            </View>
          </View>
        </View>
        <Button buttonName={"Đăng xuất"} screenName={"LoginPage"}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  content: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#808080",
  },
});

export default Profile;
