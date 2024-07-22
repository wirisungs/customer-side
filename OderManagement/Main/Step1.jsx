import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { ImagesAssets } from '../../Image';
import RNPickerSelect from 'react-native-picker-select';
import CheckBox from 'react-native-check-box';
import { LinearGradient } from 'expo-linear-gradient';
import Down from '../Icons/Down'

export default function Step1({ navigation }) {
  const units = [
    { label: 'cm', value: 'cm' },
    { label: 'dm', value: 'dm' },
    { label: 'm', value: 'm' },
  ];
  const InputSDT = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Số điện thoại"
          style={styles.input}
        />
      </View>
    );
  };

  const InputName = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Họ tên"
          style={styles.input}
        />
      </View>
    );
  };

  const InputLocation = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Địa chỉ"
            style={styles.input}
          />
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              source={ImagesAssets.Map}
              style={styles.imgMap}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.textnote}>Lưu ý: Không được để trống bất kì ô nào</Text>
      </View>
    );
  };

  const InputTenHang = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholder="Tên hàng"
          style={styles.input}
        />
      </View>
    );
  };

  const InputKLDonHang = () => {
    const [text, setText] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('g');
    const units = [
      { label: 'g', value: 'g' },
      { label: 'kg', value: 'kg' },
     
    ];
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Khối lượng hàng"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={units}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Image source={ImagesAssets.BackDown} style={styles.arrowIcon} />;
            }}
          />
        </View>
      </View>
    );
  };

  const InputSoLuong = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setText}
          value={text}
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
    const [text, setText] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('cm');
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Chiều cao"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={units}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Down/>;
            }}
          />
        </View>
      </View>
    );
  };

  const InputRong = () => {
    const [text, setText] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('cm');
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Chiều rộng"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={units}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Image source={ImagesAssets.BackDown} style={styles.arrowIcon} />;
            }}
          />
        </View>
      </View>
    );
  };

  const InputCao = () => {
    const [text, setText] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('cm');
   
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Chiều cao"
            style={styles.input}
          />
          <RNPickerSelect
            onValueChange={(value) => setSelectedUnit(value)}
            items={units}
            style={pickerSelectStyles}
            value={selectedUnit}
            useNativeAndroidPickerStyle={false}
            Icon={() => {
              return <Image source={ImagesAssets.BackDown} style={styles.arrowIcon} />;
            }}
          />
        </View>
      </View>
    );
  };

  const InputNote = () => {
    const [text, setText] = useState('');
    return (
      <View style={styles.inputAll}>
        <TextInput
          onChangeText={setText}
          value={text}
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
        <CheckBox
           isChecked={selectedItems.includes('cake')}
           onClick={() => handleCheckboxChange('cake')}
           style={styles.cks}
           checkBoxColor='#03A63C'
        />
          <Text style={styles.textCOD}>Thu hộ phí COD</Text>
        <CheckBox
           isChecked={selectedItems1.includes('cake')}
           onClick={() => handleCheckboxChange1('cake')}
           style={styles.cks}
           checkBoxColor='#03A63C'
        />
        <Text style={styles.textCOD}>Hàng dễ vỡ</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CreateStep2')}>
        <LinearGradient
          colors={['#04BF45', '#1C9546']} 
          style={styles.btnnext}>
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
    backgroundColor: '#ffffff',
    // bottom:50
  },
  row1: {
    padding: 24,
  },
  row2: {
    padding: 24,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputAll: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 12,
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  ck: {
    position: 'absolute',
    right: 10,
  },
  
  textnote: {
    marginTop: 20,
    color: '#03A63C',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgMap: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 20,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#ffffff',
    marginTop:10,
    paddingHorizontal:10,
    marginHorizontal:5
  },
  cb1:{
    flexDirection:'row',
    marginBottom:50
  },
  cks:{
    marginLeft:24,
    marginRight:12,
    color:'#03A63C'
  },
  textCOD:{
     marginRight:24,
     color:'#808080'
  },
  textadd:{
    color:'#0313A6',
    fontSize: 16
  },
  viewadd:{
    alignItems:'center',
    marginTop: 26,
    marginBottom:-12
  },
  btnnext:{
    alignItems:'center',
    borderRadius:20,
    padding:16,
    marginBottom:80,
    marginHorizontal:20
  },
  textnext:{
     fontWeight:'600',
     color:'#ffffff',
     fontSize:20
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 20,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: '#04BF45',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    color: '#ffffff',
    paddingRight: 30,
    backgroundColor: '#04BF45',
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});
