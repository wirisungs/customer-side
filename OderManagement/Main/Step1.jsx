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

export default function Step1({ navigation,phone }) {
  // const { phone } = route.params || {};
  const unitsLong = [
    { label: "cm", value: "cm" },
    { label: "dm", value: "dm" },
    { label: "m", value: "m" },
  ];
  const [selectedUnitKL, setSelectedUnitKL] = useState("g");
  const [selectedUnitDai, setSelectedUnitDai] = useState("cm");
  const [selectedUnitRong, setSelectedUnitRong] = useState("cm");
  const [selectedUnitCao, setSelectedUnitCao] = useState("cm");
  const unitsKL = [
    { label: "g", value: "g" },
    { label: "kg", value: "kg" },
  ];
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [locationsend, setLocationSend] = useState('');
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

  const changeKL = () => {
    let result;
    if (selectedUnitKL == "g") {
      result = kl * 1
    } else if (selectedUnitKL == "kg") {
      result = kl * 1000
    }
    return result;
  };

  const changeDai = () => {
    let result;
    if (selectedUnitDai == "cm") {
      result = dai * 1
    } else if (selectedUnitDai == "dm") {
      result = dai * 10
    } else if (selectedUnitDai == "m") {
      result = dai * 100
    }
    return result;
  };

  const changeRong = () => {
    let result;
    if (selectedUnitRong == "cm") {
      result = rong * 1
    } else if (selectedUnitRong == "dm") {
      result = rong * 10
    } else if (selectedUnitRong == "m") {
      result = rong * 100
    }
    return result;
  };

  const changeCao = () => {
    let result;
    if (selectedUnitCao == "cm") {
      result = cao * 1
    } else if (selectedUnitCao == "dm") {
      result = cao * 10
    } else if (selectedUnitCao == "m") {
      result = cao * 100
    }
    return result;
  };

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
    return Math.floor(Math.random() * 100000) + 10000;
  };

  const handleSubmit = async () => {
    if (!number.trim() || !name.trim()) {
      Alert.alert('Lỗi', 'Bạn cần nhập dữ liệu!');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:4001/api/order', {
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
          KL: changeKL(),
          SL: sl,
          Width: changeRong(),
          Height: changeCao(),
          Length: changeDai(),
          Note: note,
          Status: 'Chờ vận chuyển',
          driverID: "",
          Email: phone
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

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.row1}>
          <Text style={styles.text1}>Thông tin người gửi *</Text>
    
          <View style={styles.inputAll}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setLocationSend}
                value={locationsend}
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
        </View>
        <View style={styles.row1}>
          <Text style={styles.text1}>Thông tin người nhận *</Text>
          <View style={styles.inputAll}>
            <TextInput
              onChangeText={setNumber}
              value={number}
              placeholder="Số điện thoại"
              style={styles.input}
            />
          </View>
          <View style={styles.inputAll}>
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Họ tên"
              style={styles.input}
            />
          </View>
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
        </View>
        <View style={styles.row2}>
          <Text style={styles.text1}>Thông tin đơn hàng *</Text>
          <View style={styles.inputAll}>
            <TextInput
              onChangeText={setNamepro}
              value={namepro}
              placeholder="Tên hàng"
              style={styles.input}
            />
          </View>
          <View style={styles.inputAll}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setKL}
                value={kl}
                placeholder="Khối lượng hàng"
                style={styles.input}
              />
              <RNPickerSelect
                onValueChange={(value) => setSelectedUnitKL(value)}
                items={unitsKL}
                style={pickerSelectStyles}
                value={selectedUnitKL}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                  return <Down />;
                }}
              />
            </View>
          </View>
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
        </View>
        <View style={styles.row1}>
          <Text style={styles.text1}>Thông tin tổng kiện hàng *</Text>
          <View style={styles.inputAll}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setDai}
                value={dai}
                placeholder="Chiều dài"
                style={styles.input}
              />
              <RNPickerSelect
                onValueChange={(value) => setSelectedUnitDai(value)}
                items={unitsLong}
                style={pickerSelectStyles}
                value={selectedUnitDai}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                  return <Down />;
                }}
              />
            </View>
          </View>
          <View style={styles.inputAll}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setRong}
                value={rong}
                placeholder="Chiều rộng"
                style={styles.input}
              />
              <RNPickerSelect
                onValueChange={(value) => setSelectedUnitRong(value)}
                items={unitsLong}
                style={pickerSelectStyles}
                value={selectedUnitRong}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                  return <Down />;
                }}
              />
            </View>
          </View>
          <View style={styles.inputAll}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={setCao}
                value={cao}
                placeholder="Chiều cao"
                style={styles.input}
              />
              <RNPickerSelect
                onValueChange={(value) => setSelectedUnitCao(value)}
                items={unitsLong}
                style={pickerSelectStyles}
                value={selectedUnitCao}
                useNativeAndroidPickerStyle={false}
                Icon={() => {
                  return <Down />;
                }}
              />
            </View>
          </View>
          <View style={styles.inputAll}>
            <TextInput
              onChangeText={setNote}
              value={note}
              placeholder="Ghi chú"
              style={styles.input}
            />
          </View>
          <Text style={styles.textnote}>
            Lưu ý: Không được để trống bất kì ô nào
          </Text>
        </View>
        {/* <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={["#04BF45", "#1C9546"]}
            style={styles.btnnext}
          >
            <Text style={styles.textnext}>Tiếp theo</Text>
          </LinearGradient>
        </TouchableOpacity> */}
         <TouchableOpacity onPress={() => navigation.navigate('TraCuocPhi',{
                                                                             location,
                                                                             locationsend,
                                                                             number,
                                                                             name,
                                                                             namepro,
                                                                             kl,
                                                                             sl,
                                                                             dai,
                                                                             rong,
                                                                             cao,
                                                                             note,
                                                                             phone
                                                                             })}>
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
    // bottom: -50
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
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 24,
    paddingVertical: 13,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    color: "#ffffff",
    paddingHorizontal: 24,
    backgroundColor: "#04BF45",
    fontWeight: 'bold',
    // textAlign: 'left' // Thêm dòng này
  },
  iconContainer: {
    marginTop: 12,
  },
});

