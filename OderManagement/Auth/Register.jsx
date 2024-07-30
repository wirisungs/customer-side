import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import CheckBox from "react-native-check-box";
import { LinearGradient } from "expo-linear-gradient";
import Checkbox from "../../components/Input/Checkbox";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(true);

    const auth = getAuth();

    // const handleRegister = async () => {
    //   if (password !== repassword) {
    //     Alert.alert('Error', 'Mật khẩu và nhập lại mật khẩu không khớp!');
    //     return;
    //   }
    //   if (!isChecked) {
    //     Alert.alert('Error', 'Bạn phải đồng ý với điều khoản sử dụng!');
    //     return;
    //   }
    //   try {
    //     await createUserWithEmailAndPassword(auth, email, password);
    //     navigation.navigate('LoginPage');
    //   } catch (error) {
    //     console.error('Registration error:', error.message);
    //     Alert.alert('Registration failed!', 'Please try again.');
    //   }
    // };

    const handleSubmit = async () => {
  
      if (!name || !phone ||!email ||!password ||!repassword .trim()) {
        Alert.alert('Thông báo', 'Bạn cần nhập đủ thông tin');
        return;
      }
      if (password !== repassword) {
        Alert.alert('Thông báo', 'Mật khẩu và nhập lại mật khẩu không khớp!');
        return;
      }
      if (!isChecked) {
        Alert.alert('Thông báo', 'Bạn phải đồng ý với điều khoản sử dụng!');
        return;
      }
  //192.168.1.18
      try {
        const response = await fetch('http://172.31.54.110:4000/api/user', {  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name:name,
            SDT: phone,
            Email: email,
            Gender: "Nam",
            DOB:"29/02/2004",
            Address: "457 Huỳnh Tấn Phát"
          }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          // Alert.alert('Thành công', 'Dữ liệu đã được thêm thành công!');
          try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('LoginPage');
          } catch (error) {
            console.error('Registration error:', error.message);
            Alert.alert('Registration failed!', 'Please try again.');
          }
          // setNumber('');
          // setLocation('');
          // setNamepro('');
          // setName('');
          // setKL('');
          // setSL('');
          // setRong('');
          // setCao('');
          // setDai('');
          // setNote('');
        } else {
          Alert.alert('Lỗi', result.error || 'Có lỗi xảy ra khi gửi dữ liệu.');
        }
      } catch (error) {
        console.error('Lỗi khi gửi dữ liệu:', error);
        Alert.alert('Lỗi', 'Có lỗi xảy ra khi gửi dữ liệu.');
      }
    };
  return (
    <View style={styles.container}>
      <View style={styles.topicAll}>
        <Text style={styles.topic}>THIEN PHUC EXPRESS</Text>
        <Text style={styles.topic1}>Giao hàng 1 giây, nhận hàng liền tay!</Text>
      </View>
      <View style={styles.inputAll}>
        <View style={styles.phoneText}>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Họ và tên"
            style={styles.numberPhone}
            keyboardType="default"
          />
        </View>
        <View style={styles.phoneText}>
          <TextInput
            onChangeText={setPhone}
            value={phone}
            placeholder="Số điện thoại"
            style={styles.numberPhone}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.phoneText}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            style={styles.numberPhone}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.phoneText}>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Mật khẩu"
            style={styles.numberPhone}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.phoneText}>
          <TextInput
            onChangeText={setRepassword}
            value={repassword}
            placeholder="Nhập lại mật khẩu"
            style={styles.numberPhone}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          Content={"Đồng ý với điều khoản và điều kiện của chúng tôi"}
        />
      </View>

      <TouchableOpacity
        style={styles.btnAll}
        onPress={handleSubmit}
      >
        <LinearGradient colors={["#04BF45", "#1C9546"]} style={styles.btnnext}>
          <Text style={styles.textnext}>Đăng kí</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnAll2}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <View>
          <Text style={styles.btnDK}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  topicAll: {
    alignItems: "center",
    marginTop: "20%",
  },
  topic: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 16,
    color: "#1C1C1C",
  },
  topic1: {
    color: "#808080",
    fontSize: 16,
  },
  phoneText: {
    height: 50,
    width: "90%",
    marginHorizontal: "5%",
    borderWidth: 1,
    borderRadius: 24,
    borderColor: "rgba(105, 95, 165, 0.2)",
    justifyContent: "center",
    marginBottom: 10,
  },
  inputAll: {
    alignItems: "center",
    marginTop: 16,
  },
  numberPhone: {
    fontSize: 16,
    marginLeft: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginHorizontal: "5%",
    alignItems: "center",
  },
  btnAll: {
    alignItems: "center",
    backgroundColor: "#695FA5",
    height: "7%",
    marginHorizontal: "5%",
    borderRadius: 24,
    justifyContent: "center",
    marginVertical: 16,
  },
  btnAll2: {
    alignItems: "center",
    borderWidth: 2,
    height: "7%",
    marginHorizontal: "5%",
    borderRadius: 24,
    justifyContent: "center",
    borderColor: "#04BF45",
  },
  btnDN: {
    color: "#fff",
    fontSize: 18,
  },
  btnDK: {
    color: "#04BF45",
    fontSize: 18,
  },
  btnAll: {
    marginHorizontal: 20,
    borderRadius: 24,
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
