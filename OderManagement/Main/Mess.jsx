import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, ScrollView ,Image} from 'react-native';
import HeaderForStack from '../../components/Header/HeaderForStack';
import { LinearGradient } from 'expo-linear-gradient';
import { ImagesAssets } from '../../Image';

export default function TestPush({ navigation,route }) {
  const [mess, setMess] = useState('');
  const [messages, setMessages] = useState([]);
  const { phone } = route.params;

  useEffect(() => {
    console.log('Phone:', phone); // Thêm dòng này để kiểm tra giá trị phone
    const fetchData = async () => {
      try {
        const response = await fetch(`http://172.31.54.110:4001/api/test?email=${phone}`);
        const messagesData = await response.json();
        setMessages(messagesData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };
  
    fetchData();
  }, [phone]);
  

  const handleSubmit = async () => {
    if (!mess.trim()) {
      // Alert.alert('Lỗi', 'Bạn cần nhập đủ dữ liệu!');
      return;
    }
    try {
      const url = `http://172.31.54.110:4001/api/test?email=${phone}`;
      console.log('Fetch URL:', url); // Thêm dòng này để kiểm tra URL
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: phone,
          Mess: mess,
          Status: 'Cus',
        }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Alert.alert('Thành công', 'Dữ liệu đã được thêm thành công!');
        const fetchData = async () => {
          try {
            const response = await fetch(`http://172.31.54.110:4001/api/test?email=${phone}`);
            const messagesData = await response.json();
            setMessages(messagesData);
          } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
          }
        };
  
        fetchData();
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
       <HeaderForStack screenName={"Nhắn tin"} />
     <ScrollView style={styles.viewcuon}>
      <View>
        {messages.map((item, index) => (
          <View key={index} style={item.Status === 'Cus' ? styles.cusMessage : styles.staffMessage}>
            <Text style={item.Status === 'Cus' ? styles.cusText : styles.staffText}>{item.Status === 'Cus' ? '' : ''}{item.Mess}</Text>
          </View>
        ))}
      </View>
   
    </ScrollView>
    <View >
    <LinearGradient
            colors={["#04BF45", "#1C9546"]}
            style={styles.viewtop2}
          >  
          <TouchableOpacity onPress={handleSubmit} style={styles.btn1}>
            <Image style={styles.btnimg} source={ImagesAssets.image}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSubmit} style={styles.btn1}>
            <Image style={styles.btnimg} source={ImagesAssets.micro}/>
          </TouchableOpacity>

        <TextInput
          onChangeText={setMess}
          value={mess}
          placeholder="Nhắn tin"
          style={styles.search}
          textContentType="none"
          autoCorrect={false}
          keyboardType="default"
        />
          <TouchableOpacity onPress={handleSubmit} style={styles.btn2}>
            <Image style={styles.btnimg} source={ImagesAssets.send}/>
          </TouchableOpacity>
          </LinearGradient>
    </View>
          
   
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // padding:24
  },
  viewcuon:{
     marginBottom: '20%',
     flex:1,
     padding:24
  },
  search: {
    padding: 12,
    width: '60%',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor:'#ffffff'
  },
  email: {
    borderWidth: 1,
    padding: 8,
    width: '50%',
    borderRadius: 20
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
    fontWeight: 'bold'
  },
 
  imgB: {
    position: 'absolute',
    top: 24,
    left: 24,
  },
  viewtop: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 36
  },
  viewtop2: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 36,
    position:'absolute',
    bottom: 0,
    width:'100%',
    padding: 12,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
  },
  cusMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#04BF45',
    borderRadius: 20,
    padding: 16,
    margin: 5,
    
  },
  staffMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    padding: 16,
    margin: 5,
  },
  cusText:{
    color:'#ffffff',
    fontSize: 12
  },
  btnimg:{
    height:30,
    width: 30
  },
  btn1:{
    justifyContent:'center',
    marginHorizontal:5
  },
  btn2:{
    justifyContent:'center',
    backgroundColor:'#ffffff',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal:12
  }
});
