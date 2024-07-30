import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { auth } from '../firebase/firebaseConfig';
import { signOut } from 'firebase/auth';
import HeaderProfile from "../components/Header/HeaderForProfile";
import { LinearGradient } from "expo-linear-gradient";

// icons
import User from "../Icons/User";
import BoxLine from "../Icons/OutlineIcons/BoxLine";
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("LoginPage");
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderProfile />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          {/* Tài khoản */}
          <View style={styles.contentSection}>
            <Text style={styles.header3}>Tài khoản</Text>
            <View style={styles.accountContent}>
              <View style={styles.box}>
                <User />
                <Text style={styles.content}>Thông tin cá nhân & Bảo mật</Text>
              </View>
              <TouchableOpacity onPress={() => handleNavigation("OrderOfMe")}>
                <View style={styles.box}>
                  <BoxLine stroke={"#F91313"} width="24" height="24" />
                  <Text style={styles.content}>Đơn hàng của bạn</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Tiện ích */}
          <View style={styles.contentSection}>
            <Text style={styles.header3}>Tiện ích</Text>
            <View style={styles.accountContent}>
              <View style={styles.box}>
                <Map stroke={"#F91313"} />
                <Text style={styles.content}>Địa điểm đã lưu</Text>
              </View>
              <View style={styles.box}>
                <CalcuLine width="24" height="24" fill={"#F91313"} />
                <Text style={styles.content}>Tra tính cước phí</Text>
              </View>
              <View style={styles.box}>
                <PostLine width="24" height="24" />
                <Text style={styles.content}>Tra cứu bưu cục</Text>
              </View>
              <View style={styles.box}>
                <Warning fill={"#F91313"} width="24" height="24" />
                <Text style={styles.content}>Quản lý yêu cầu khiếu nại</Text>
              </View>
              <View style={styles.box}>
                <VoucherLine />
                <Text style={styles.content}>Ưu đãi</Text>
              </View>
            </View>
          </View>

          {/* Về chúng tôi */}
          <View style={styles.contentSection}>
            <Text style={styles.header3}>Về chúng tôi</Text>
            <View style={styles.accountContent}>
              <View style={styles.box}>
                <Policy />
                <Text style={styles.content}>Điều khoản</Text>
              </View>
              <View style={styles.box}>
                <Advertise />
                <Text style={styles.content}>Giới thiệu</Text>
              </View>
              <View style={styles.box}>
                <TutoLine />
                <Text style={styles.content}>Hướng dẫn sử dụng</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
          <LinearGradient
            colors={["#04BF45", "#1C9546"]}
            style={styles.btnGradient}
          >
            <Text style={styles.btnText}>Đăng xuất</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80, // Đảm bảo có khoảng trống dưới cùng
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentSection: {
    flex: 1,
    marginBottom: 20,
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
    marginTop: 24,
  },
  content: {
    fontSize: 16,
    color: "#808080",
  },
  accountContent: {
    marginTop: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  btn: {
    marginVertical: 20,
    alignSelf: 'center',
    width: '80%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  btnGradient: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
