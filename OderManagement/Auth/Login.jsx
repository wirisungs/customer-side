import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "react-native-check-box";
import { ImagesAssets } from "../../Image";
import Checkbox from "../../components/Input/Checkbox";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const auth = getAuth();

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        // Sign in
        await signInWithEmailAndPassword(auth, phone, password);
        navigation.navigate('Home',{phone});
        
      } else {
        // Sign up
        await createUserWithEmailAndPassword(auth, phone, password);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
      alert('Authentication failed! Please try again.');
    }
  };

  return (
    <View>
      <Image source={ImagesAssets.bg} style={styles.imgBG} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topicAll}>
          <Text style={styles.topic}>THIEN PHUC EXPRESS</Text>
          <Text style={styles.topic1}>
            Giao hàng 1 giây, nhận hàng liền tay!
          </Text>
        </View>
        <View style={styles.inputAll}>
          <View style={styles.phoneText}>
            <TextInput
              onChangeText={setPhone}
              value={phone}
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
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox Content={"Ghi nhớ mật khẩu"} />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnAll}
          onPress={handleAuthentication}
        >
          <LinearGradient
            colors={["#04BF45", "#1C9546"]}
            style={styles.btnnext}
          >
            <Text style={styles.textnext}>Đăng nhập</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btndk}
          onPress={() => navigation.navigate("RegisterPage")}
        >
          <Text style={styles.textdk}>Đăng kí</Text>
        </TouchableOpacity>
        <View style={styles.rowlast}>
          <Text style={styles.textby}>Đăng nhập bằng</Text>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity>
            <Image source={ImagesAssets.fb} style={styles.socialIconfb} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ImagesAssets.gg} style={styles.socialIcongg} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
  },
  imgBG: {
    height: 300,
    width: "100%",
  },
  topicAll: {
    alignItems: "center",
    marginVertical: 20,
  },
  topic: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1C1C1C",
  },
  topic1: {
    color: "#808080",
    fontSize: 16,
  },
  inputAll: {
    alignItems: "center",
  },
  phoneText: {
    height: 50,
    width: "90%",
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 24,
    borderColor: "rgba(105, 95, 165, 0.2)",
    justifyContent: "center",
  },
  numberPhone: {
    fontSize: 16,
    marginLeft: 16,
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: "5%",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#695FA5",
    marginLeft: 10,
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
  btndk: {
    alignItems: "center",
    padding: 16,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 24,
    borderColor: "#04BF45",
  },
  textdk: {
    fontWeight: "600",
    color: "#04BF45",
    fontSize: 20,
  },
  rowlast: {
    alignItems: "center",
    marginVertical: 16,
  },
  textby: {
    color: "#E2E2E2",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIconfb: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
  },
  socialIcongg: {
    height: 40,
    width: 40,
    marginHorizontal: 10,
  },
});
