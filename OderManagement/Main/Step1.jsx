import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { ImagesAssets } from "../../Image";
import RNPickerSelect from "react-native-picker-select";
import CheckBox from "react-native-check-box";
import { LinearGradient } from "expo-linear-gradient";
import Down from "../Icons/Down";
import Checkbox from "../../components/Input/Checkbox";

export default function Step1({ navigation }) {
  const unitsLong = [
    { label: "cm", value: "cm" },
    { label: "dm", value: "dm" },
    { label: "m", value: "m" },
  ];
  const [selectedUnit, setSelectedUnit] = useState("g");
  const unitsKL = [
    { label: "g", value: "g" },
    { label: "kg", value: "kg" },
  ];
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

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [promotions, setPromotions] = useState([]);

  
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
    if (!number.trim() || !name.trim()) {
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
          driverID: ""
        }), 
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Thành công', 'Dữ liệu đã được thêm thành công!');
        setNumber('');
        setLocation('');
        setNamepro('');
        setName('');
        setKL('');
        setSL('');
        setRong('');
        setCao('');
        setDai('');
        setNote('');
      } else {
        Alert.alert('Lỗi', result.error || 'Có lỗi xảy ra khi gửi dữ liệu.');
      }
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi gửi dữ liệu.');
    }
  };

  
  const InputSDT = () => {
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setNumber}
          value={number}
          placeholder="Số điện thoại"
          style={styles.input}
        
        />
      </View>
    );
  };

  const InputName = () => {
  
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Họ tên"
          style={styles.input}
        />
      </View>
    );
  };
  

  const InputLocation = () => {
  
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setLocation}
            value={location}
            placeholder="Địa chỉ"
            style={styles.input}
          />
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={ImagesAssets.Map} style={styles.imgMap} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textnote}>
          Lưu ý: Không được để trống bất kì ô nào
        </Text>
      </View>
    );
  };

  const InputTenHang = () => {
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setNamepro}
          value={namepro}
          placeholder="Tên hàng"
          style={styles.input}
        />
      </View>
    );
  };

  const InputKLDonHang = () => {

    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setKL}
            value={kl}
            placeholder="Khối lượng hàng"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={unitsKL}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return (
                <Image
                  source={ImagesAssets.BackDown}
                  style={styles.arrowIcon}
                />
              );
            }}
          />
        </View>
      </View>
    );
  };

  const InputSoLuong = () => {
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setSL}
          value={sl}
          placeholder="Số lượng"
          style={styles.input}
        />
        <View style={styles.viewadd}>
          <Text style={styles.textadd}>Thêm hàng</Text>
        </View>
      </View>
    );
  };

  const InputDai = () => {
    const [selectedUnit, setSelectedUnit] = useState("cm");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setDai}
            value={dai}
            placeholder="Chiều dài"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={unitsLong}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Down />;
            }}
          />
        </View>
      </View>
    );
  };

  const InputRong = () => {
    const [selectedUnit, setSelectedUnit] = useState("cm");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setRong}
            value={rong}
            placeholder="Chiều rộng"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={unitsLong}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return (
                <Image
                  source={ImagesAssets.BackDown}
                  style={styles.arrowIcon}
                />
              );
            }}
          />
        </View>
      </View>
    );
  };

  const InputCao = () => {
    const [selectedUnit, setSelectedUnit] = useState("cm");

    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setCao}
            value={cao}
            placeholder="Chiều cao"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={unitsLong}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return (
                <Image
                  source={ImagesAssets.BackDown}
                  style={styles.arrowIcon}
                />
              );
            }}
          />
        </View>
      </View>
    );
  };

  const InputNote = () => {
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setNote}
          value={note}
          placeholder="Ghi chú"
          style={styles.input}
        />
        <Text style={styles.textnote}>Không bắt buộc</Text>
      </View>
    );
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItems1, setSelectedItems1] = useState([]);
  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCheckboxChange1 = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems1(selectedItems1.filter((i) => i !== item));
    } else {
      setSelectedItems1([...selectedItems1, item]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row1}>
          <Text style={styles.text1}>Thông tin người nhận *</Text>
          <InputSDT />
          <InputName />
          
          <InputLocation />
        </View>
        <View style={styles.row2}>
          <Text style={styles.text1}>Thông tin đơn hàng *</Text>
          <InputTenHang />
          <InputKLDonHang />
          <InputSoLuong />
        </View>
        <View style={styles.row1}>
          <Text style={styles.text1}>Thông tin tổng kiện hàng *</Text>
          <InputDai />
          <InputRong />
          <InputCao />
          <InputNote />
        </View>
        <View style={styles.cb1}>
          <Checkbox Content={"Thu hộ phí COD"} />
          <Checkbox Content={"Hàng dễ vỡ"} />
        </View>
        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={["#04BF45", "#1C9546"]}
            style={styles.btnnext}
          >
            <Text style={styles.textnext}>Tiếp theo</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // bottom:50
  },
  row1: {
    padding: 24,
  },
  row2: {
    padding: 24,
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
  },
  inputAll: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 12,
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  ck: {
    position: "absolute",
    right: 10,
  },

  textnote: {
    marginTop: 20,
    color: "#03A63C",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgMap: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 20,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#ffffff",
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  cb1: {
    paddingHorizontal: "5%",
    flexDirection: "row",
    marginBottom: 50,
  },
  cks: {
    marginLeft: 24,
    marginRight: 12,
    color: "#03A63C",
  },
  textCOD: {
    marginRight: 24,
    color: "#808080",
  },
  textadd: {
    color: "#0313A6",
    fontSize: 16,
  },
  viewadd: {
    alignItems: "center",
    marginTop: 26,
    marginBottom: -12,
  },
  btnnext: {
    alignItems: "center",
    borderRadius: 20,
    padding: 16,
    marginBottom: 80,
    marginHorizontal: 20,
  },
  textnext: {
    fontWeight: "600",
    color: "#ffffff",
    fontSize: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 20,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#04BF45",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    color: "#ffffff",
    paddingRight: 30,
    backgroundColor: "#04BF45",
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});
