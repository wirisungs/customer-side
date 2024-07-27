import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';

export default function TestPush({ navigation }) {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [namepro, setNamepro] = useState('');
  const [kl, setKL] = useState('');
  const [sl, setSL] = useState('');
  const [dai, setDai] = useState('');
  const [rong, setRong] = useState('');
  const [cao, setCao] = useState('');
  const [note, setNote] = useState('');

  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 100000) + 10000; // Tạo giá tiền ngẫu nhiên từ 10,000 đến 110,000
  };

  const handleSubmit = async () => {
    if (!name.trim() || !namepro.trim()) {
      Alert.alert('Lỗi', 'Bạn cần nhập dữ liệu!');
      return;
    }

    try {
      const response = await fetch('http://192.168.1.138:4001/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Address: location,
          Code: generateRandomString(10),
          Detail: namepro,
          Price: generateRandomPrice(),
          ReceiverName: name,
          SDT: number,
          KL: kl,
          SL: sl,
          Width: rong,
          Height: cao,
          Length: dai,
          Note: note,
          Status: 'Đang đóng gói',
          driverID: generateRandomString(8)
        }), 
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Thành công', 'Dữ liệu đã được thêm thành công!');
      } else {
        Alert.alert('Lỗi', result.error || 'Có lỗi xảy ra khi gửi dữ liệu.');
      }
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi gửi dữ liệu.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.imgB} onPress={() => navigation.goBack()}>
        {/* <Image
          source={require('../../assets/muitenden.png')}
          style={styles.imgBack}
        /> */}
      </TouchableOpacity>

      <TextInput
        onChangeText={setNumber}
        value={number}
        placeholder="Nhập SDT"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setName}
        value={name}
        placeholder="Nhập Họ tên"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setLocation}
        value={location}
        placeholder="Nhập Địa chỉ"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setNamepro}
        value={namepro}
        placeholder="Nhập Tên hàng"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setKL}
        value={kl}
        placeholder="Nhập KL"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setSL}
        value={sl}
        placeholder="Nhập SL"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setDai}
        value={dai}
        placeholder="Nhập Dai"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setRong}
        value={rong}
        placeholder="Nhập Rong"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setCao}
        value={cao}
        placeholder="Nhập Cao"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <TextInput
        onChangeText={setNote}
        value={note}
        placeholder="Nhập Note"
        style={styles.search}
        textContentType="none"
        autoCorrect={false}
        keyboardType="default"
      />
      <View style={styles.rowBtn}>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    borderWidth: 1,
    padding: 8,
    width: '90%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  rowBtn: {
    flexDirection: 'row',
  },
  imgB: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
});
