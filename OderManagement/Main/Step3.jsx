import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Step3({ navigation }) {
  const NganHang = () => {
    const [text, setText] = useState("");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <Text style={styles.textTopic}>Ngân hàng</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="NGAN HANG QUAN DOI MB BANK"
            placeholderTextColor="#808080"
            style={styles.input}
          />
        </View>
      </View>
    );
  };
  const ChiNhanh = () => {
    const [text, setText] = useState("");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <Text style={styles.textTopic}>Chi nhánh</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="TP Express Nhà Bè"
            placeholderTextColor="#808080"
            style={styles.input}
          />
        </View>
      </View>
    );
  };
  const STK = () => {
    const [text, setText] = useState("");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <Text style={styles.textTopic}>Số tài khoản</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="000246294683675"
            placeholderTextColor="#808080"
            style={styles.input}
          />
        </View>
      </View>
    );
  };
  const TKThuHuong = () => {
    const [text, setText] = useState("");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <Text style={styles.textTopic}>Tài khoản thụ hưởng</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="THIEN PHUC EXPRESS"
            placeholderTextColor="#808080"
            style={styles.input}
          />
        </View>
      </View>
    );
  };
  const NoiDung = () => {
    const [text, setText] = useState("");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <Text style={styles.textTopic}>Nội dung</Text>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="GHTK-03K3-TPE"
            placeholderTextColor="#808080"
            style={styles.input}
          />
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.text1}>Thông tin chuyển khoản</Text>
          <Text style={styles.text2}>
            Lưu ý: Vui lòng nhập đúng nội dung chuyển khoản và
            <Text style={styles.textred}> số tiền của đơn hàng. </Text>
            Nếu nhập sai thông tin sẽ ảnh hưởng đến quá trình xử lý đơn hàng và
            chúng tôi sẽ
            <Text style={styles.textred}> không chịu trách nhiệm </Text>
            trong trường hợp mất tiền do sai thông tin.
            <Text style={styles.textred}> *</Text>
          </Text>
        </View>
        <View style={styles.boxInput}>
          <NganHang />
          <ChiNhanh />
          <STK />
          <TKThuHuong />
          <NoiDung />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateDone")}
          style={styles.btnContainer}
        >
          <LinearGradient
            colors={["#04BF45", "#1C9546"]}
            style={styles.btnsuccess}
          >
            <Text style={styles.textbtn}>Hoàn tất</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 24,
  },
  text1: {
    fontWeight: "700",
    fontSize: 20,
  },
  text2: {
    fontSize: 12,
    color: "#808080",
    marginTop: 5,
  },
  textred: {
    color: "#F91313",
  },
  inputAll: {
    backgroundColor: "#E2E2E2",
    padding: 24,
    borderRadius: 20,
    marginVertical: 12,
  },
  boxInput: {
    marginVertical: 16,
  },
  textTopic: {
    fontWeight: "600",
    color: "#808080",
    fontSize: 16,
  },
  input: {
    fontSize: 18,
  },
  btnContainer: {
    alignItems: "center", // Ensure the button is centered
    marginVertical: 16,
  },
  btnsuccess: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width: "100%", // Ensure the button takes full width
  },
  textbtn: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
});
