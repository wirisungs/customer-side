import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ImagesAssets } from "../../Image";
import { LinearGradient } from "expo-linear-gradient";

const MyInput = ({
  onChangeText,
  value,
  placeholder,
  inputRef,
  nextInputRef,
}) => {
  return (
    <View style={styles.hinhvgV}>
      <TextInput
        ref={inputRef}
        onChangeText={(text) => {
          onChangeText(text.replace(/[^0-9]/g, ""));
          if (text.length === 1 && nextInputRef) {
            nextInputRef.current.focus();
          }
        }}
        value={value}
        placeholder={placeholder}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default function OTP({ navigation, route }) {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const { phone } = "093123128";
  const fakeOTP = "123456";

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);

  const submitOTP = () => {
    const enteredOTP = `${text}${text1}${text2}${text3}${text4}${text5}`;
    if (enteredOTP.length < 6) {
      alert("Please enter the full OTP.");
      return;
    }
    if (enteredOTP !== fakeOTP) {
      alert("Invalid OTP.");
      clear();
      return;
    }
    clear();
    navigation.navigate("LoginPage");
  };

  const resendOTP = () => {
    alert(`OTP: ${fakeOTP}`);
  };

  const clear = () => {
    setText("");
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageDetail}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ImagesAssets.back}
            style={styles.imageDetail2}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.topic}>Nhập mã xác nhận</Text>
      <Text style={styles.topic2}>Hãy nhập mã OTP đã được gửi cho {phone}</Text>
      <Text style={styles.topic3}>Gửi lại OTP (60s)</Text>

      <View style={styles.hinhvgVH}>
        <MyInput
          onChangeText={setText}
          value={text}
          placeholder=""
          inputRef={input1Ref}
          nextInputRef={input2Ref}
        />
        <MyInput
          onChangeText={setText1}
          value={text1}
          placeholder=""
          inputRef={input2Ref}
          nextInputRef={input3Ref}
        />
        <MyInput
          onChangeText={setText2}
          value={text2}
          placeholder=""
          inputRef={input3Ref}
          nextInputRef={input4Ref}
        />
        <MyInput
          onChangeText={setText3}
          value={text3}
          placeholder=""
          inputRef={input4Ref}
          nextInputRef={input5Ref}
        />
        <MyInput
          onChangeText={setText4}
          value={text4}
          placeholder=""
          inputRef={input5Ref}
          nextInputRef={input6Ref}
        />
        <MyInput
          onChangeText={setText5}
          value={text5}
          placeholder=""
          inputRef={input6Ref}
        />
      </View>

      <TouchableOpacity style={styles.btnAll} onPress={submitOTP}>
        <LinearGradient colors={["#04BF45", "#1C9546"]} style={styles.btnnext}>
          <Text style={styles.textnext}>Xác thực</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.info12}>
        <Text style={styles.info2}>Không gửi được mã ?</Text>
        <TouchableOpacity onPress={resendOTP}>
          <Text style={styles.text41}>Gửi lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    padding: 24,
  },
  imageDetail: {
    position: "absolute",
    top: 54,
    left: 24,
  },
  imageDetail2: {
    width: 25,
    height: 25,
    marginRight: 4,
  },
  topic: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 100,
  },
  topic2: {
    color: "#808080",
    fontSize: 12,
    marginTop: 12,
  },

  topic3: {
    color: "#808080",
    fontSize: 12,
    marginBottom: 24,
  },
  hinhvgV: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },
  hinhvgVH: {
    flexDirection: "row",
  },
  info12: {
    flexDirection: "row",
  },
  info2: {
    marginRight: 10,
    color: "#808080",
  },
  text41: {
    color: "#03A63C",
  },
  btnAll: {
    marginHorizontal: 20,
    borderRadius: 24,
    width: "100%",
  },
  btnnext: {
    alignItems: "center",
    borderRadius: 24,
    padding: 16,
    marginVertical: 12,
  },
  textnext: {
    fontWeight: "600",
    color: "#ffffff",
    fontSize: 20,
  },
});
