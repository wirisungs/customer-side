import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Clipboard } from "react-native";
import { ImagesAssets } from "../../Image";
import Box from "../Icons/Box";
import Car from "../Icons/CarContinue";
import Line from "../Icons/LineNext";
import Done from "../Icons/DonePro";
import LineVer from "../Icons/VerticalLine";
// import GreenHeader from "../Header/GreenHeader";
import HeaderForStack from "../../components/Header/HeaderForStack";

export default function DetailOrder({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const nameHeader = "Chi tiết";

  const copyToClipboard = () => {
    Clipboard.setString("DBAHX8QJXD");
    Alert.alert("Đã sao chép mã vào clipboard!");
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderForStack screenName={"Chi tiết"} />
      <ScrollView style={styles.srall}>
        <View style={styles.container}>
          <View style={styles.all}>
            <View style={styles.all1}>
              <Text style={styles.code}>DBAHX8QJXD</Text>
              <TouchableOpacity onPress={copyToClipboard}>
                <Image source={ImagesAssets.copy} style={styles.imgcopy} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.more}
                onPress={() => navigation.navigate("MoreDeli")}
              >
                <Text style={styles.moreText}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.status}>
              <Box style={styles.icon} />
              <Line />
              <Car style={styles.icon} />
              <Line />
              <Done />
            </View>
          </View>
          <View style={styles.all}>
            <View style={styles.all1}>
              <Text style={styles.text1}>Người gửi & người nhận</Text>
            </View>
            <View style={styles.box2}>
              <View style={styles.boxline}>
                <LineVer />
              </View>
              <View style={styles.status1}>
                <Text style={styles.textstatus}>
                  Thris Potato - 092032xxxxx
                </Text>
                <Text style={styles.textstatus1}>
                  32/21/2 Nguyễn Thị Minh Khai
                </Text>
                <Text style={styles.textstatus}>
                  Thris Potato - 092032xxxxx
                </Text>
                <Text style={styles.textstatus1}>
                  32/21/2 Nguyễn Thị Minh Khai
                </Text>
              </View>
            </View>
            <View style={styles.box3}>
              <View style={styles.status1}>
                <View style={styles.status2}>
                  <Text style={styles.text1}>Hóa đơn</Text>
                  <Text style={styles.date}>12/07/2024</Text>
                </View>
                <View style={styles.status3}>
                  <Text style={styles.textitem}>Móc khóa</Text>
                  <Text style={styles.slitem}>x1</Text>
                </View>
                <View style={styles.status3}>
                  <Text style={styles.text1}>Phí thu hộ (COD):</Text>
                  <Text style={styles.slitem}>1.781.000đ</Text>
                </View>
                <View style={styles.status3}>
                  <Text style={styles.text1}>Phí vận:</Text>
                  <Text style={styles.slitem}>30.000đ</Text>
                </View>
                <View style={styles.status3}>
                  <Text style={styles.text1}>Tổng:</Text>
                  <Text style={styles.slitem}>1.830.000đ</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.btnHuy}>
                <Text style={styles.textHuy}>Hủy đơn</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.boxcancel}>
                <Image
                  source={ImagesAssets.boxcancel}
                  style={styles.imgDH}
                  resizeMode="contain"
                />
                <Text style={styles.textcancel}>Hủy đơn hàng ?</Text>
                <View style={styles.btnbackcancel}>
                  <TouchableOpacity
                    style={styles.btnback}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.textback}>Trở về</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btncancel}
                    onPress={() => navigation.navigate("OrderMain")}
                  >
                    <Text style={styles.textcancel2}>Hủy đơn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  srall: {
    backgroundColor: "#F3F4F6",
  },
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  code: {
    fontSize: 25,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  text1: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1C1C1C",
  },
  all: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 20,
    marginVertical: 5,
  },
  all1: {
    flexDirection: "row",
    alignItems: "center",
  },
  more: {
    position: "absolute",
    right: 24,
  },
  moreText: {
    color: "#0313A6",
    fontSize: 14,
  },
  imgcopy: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  status1: {
    marginTop: 24,
    marginHorizontal: 12,
  },
  status2: {
    flexDirection: "row",
  },
  status3: {
    flexDirection: "row",
    marginTop: 24,
  },
  box2: {
    flexDirection: "row",
    marginVertical: 10,
  },
  boxline: {
    justifyContent: "center",
    marginVertical: 24,
  },
  textstatus: {
    color: "#1C1C1C",
    fontSize: 16,
  },
  textstatus1: {
    color: "#808080",
    fontSize: 16,
    marginBottom: 24,
  },
  date: {
    padding: 8,
    backgroundColor: "#04BF45",
    borderRadius: 12,
    color: "#ffffff",
    position: "absolute",
    right: 0,
  },
  slitem: {
    position: "absolute",
    right: 0,
    fontSize: 18,
    fontWeight: "bold",
  },
  textitem: {
    fontSize: 18,
  },
  btnHuy: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BF0A04",
    padding: 16,
    borderRadius: 20,
    marginTop: 24,
  },
  textHuy: {
    color: "#BF0A04",
    fontWeight: "bold",
    fontSize: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  boxcancel: {
    alignItems: "center",
  },
  imgDH: {
    height: 150,
    width: 150,
  },
  textcancel: {
    color: "#04BF45",
    fontWeight: "700",
    fontSize: 25,
    marginVertical: 12,
  },
  btnbackcancel: {
    flexDirection: "row",
    marginVertical: 12,
  },
  btncancel: {
    backgroundColor: "#BF0A04",
    padding: 8,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  textcancel2: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 12,
  },
  btnback: {
    borderWidth: 1,
    borderColor: "#BF0A04",
    padding: 8,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  textback: {
    color: "#BF0A04",
    fontSize: 20,
    fontWeight: "700",
    marginHorizontal: 12,
  },
});
