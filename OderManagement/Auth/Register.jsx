import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import CheckBox from 'react-native-check-box';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

//   const auth = getAuth();

//   const handleRegister = async () => {
//     if (password !== repassword) {
//       Alert.alert('Error', 'Mật khẩu và nhập lại mật khẩu không khớp!');
//       return;
//     }
//     if (!isChecked) {
//       Alert.alert('Error', 'Bạn phải đồng ý với điều khoản sử dụng!');
//       return;
//     }
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       navigation.navigate('Home');
//     } catch (error) {
//       console.error('Registration error:', error.message);
//       Alert.alert('Registration failed!', 'Please try again.');
//     }
//   };

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
            onChangeText={setEmail}
            value={email}
            placeholder="Số điện thoại"
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
        <CheckBox
          style={{flex: 1, padding: 10}}
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
          rightText={"Tôi đồng ý với điều khoản sử dụng"}
        />
      </View>

      <TouchableOpacity style={styles.btnAll} onPress={() => navigation.navigate('CreateStep1')}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.btnnext}>
          <Text style={styles.textnext}>Đăng kí</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnAll2} onPress={() => navigation.navigate('Login')}>
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
    backgroundColor: '#ffffff',
  },
  topicAll: {
    alignItems: 'center',
    marginTop: '20%',
  },
  topic: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#1C1C1C',
  },
  topic1: {
    color: '#808080',
    fontSize: 16,
  },
  phoneText: {
    height: 50,
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(105, 95, 165, 0.2)',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputAll: {
    alignItems: 'center',
    marginTop: 16,
  },
  numberPhone: {
    fontSize: 16,
    marginLeft: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  btnAll: {
    alignItems: 'center',
    backgroundColor: '#695FA5',
    height: '7%',
    marginHorizontal: '5%',
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 16,
  },
  btnAll2: {
    alignItems: 'center',
    borderWidth: 2,
    height: '7%',
    marginHorizontal: '5%',
    borderRadius: 20,
    justifyContent: 'center',
    borderColor: '#04BF45',
  },
  btnDN: {
    color: '#fff',
    fontSize: 18,
  },
  btnDK: {
    color: '#04BF45',
    fontSize: 18,
  },
  btnAll: {
    marginHorizontal: 20,
    borderRadius: 24,
  },
  btnnext: {
    alignItems: 'center',
    borderRadius: 24,
    padding: 16,
    marginVertical: 12,
  },
  textnext: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 20,
  },
});
