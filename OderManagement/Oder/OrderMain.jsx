import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import OrderCancel from "../YourOrder/OrderCancel";
import OrderDone from "../YourOrder/OrderDone";
import OrderGoing from "../YourOrder/OrderGoing";
import OrderWait from "../YourOrder/OrderWait";
import HeaderForStack from "../../components/Header/HeaderForStack";

export default function OrderMain({ navigation }) {
  const nameHeader = "Đơn hàng của bạn";
  const [currentPage, setCurrentPage] = useState("Done");

  return (
    <View style={styles.container}>
      <HeaderForStack screenName={"Đơn hàng của tôi"} />
      <View style={styles.content}>
        {currentPage === "Done" && (
          <OrderDone navigation={navigation} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "Cancel" && (
          <OrderCancel
            navigation={navigation}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "Going" && (
          <OrderGoing navigation={navigation} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "Wait" && (
          <OrderWait navigation={navigation} setCurrentPage={setCurrentPage} />
        )}
      </View>
      <View style={styles.underlineContainer}>
        <View
          style={[
            styles.underline,
            currentPage === "Wait" && styles.activeUnderline,
          ]}
        />
        <View
          style={[
            styles.underline,
            currentPage === "Going" && styles.activeUnderline,
          ]}
        />
        <View
          style={[
            styles.underline,
            currentPage === "Done" && styles.activeUnderline,
          ]}
        />
        <View
          style={[
            styles.underline,
            currentPage === "Cancel" && styles.activeUnderline,
          ]}
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottom1}
          onPress={() => setCurrentPage("Wait")}
        >
          <Text
            style={[styles.text, currentPage === "Wait" && styles.activeText]}
          >
            Đơn chờ vận chuyển
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottom1}
          onPress={() => setCurrentPage("Going")}
        >
          <Text
            style={[styles.text, currentPage === "Going" && styles.activeText]}
          >
            Đơn đang vận chuyển
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottom1}
          onPress={() => setCurrentPage("Done")}
        >
          <Text
            style={[styles.text, currentPage === "Done" && styles.activeText]}
          >
            Đơn đã hoàn thành
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottom1}
          onPress={() => setCurrentPage("Cancel")}
        >
          <Text
            style={[styles.text, currentPage === "Cancel" && styles.activeText]}
          >
            Đơn đã hủy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: "8%",
  },
  underlineContainer: {
    position: "absolute",
    bottom: "8%", // height of the bottom view
    width: "100%",
    flexDirection: "row",
  },
  underline: {
    flex: 1,
    height: 2,
    backgroundColor: "transparent", // default to transparent
  },
  activeUnderline: {
    backgroundColor: "#04BF45", // color for the active underline
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "8%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottom1: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 12,
  },
  activeText: {
    fontWeight: "bold",
  },
});
