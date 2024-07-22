import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { ImagesAssets } from '../../Image';
import { LinearGradient } from 'expo-linear-gradient';

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
        <Image
         source={ImagesAssets.back}
         style={styles.imgBack}
        />
        </TouchableOpacity>
      <View style={styles.topicAll}>
        <Text style={styles.topic}>QUÊN MẬT KHẨU</Text>
        <Text style={styles.topic1}>Nhập số điện thoại đăng ký tài khoản</Text>
      </View>
      <View style={styles.inputAll}>
        
        <View style={styles.phoneText}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Số điện thoại"
            style={styles.numberPhone}
            keyboardType = 'phone-pad'
          />
        </View>
        
      </View>
     
      <TouchableOpacity style={styles.btnAll} onPress={() => navigation.navigate('CreateStep1')}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.btnnext}>
          <Text style={styles.textnext}>Xác nhận</Text>
        </LinearGradient>
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
    marginVertical:20
  },
  phoneText: {
    height: 50,
    width: '90%',
    marginHorizontal: '5%',
    borderWidth: 1,
    borderRadius: 20,
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
  imgBack:{
    height: 30,
    width: 30,
    position:'absolute',
    left: 24,
    top: 36
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
