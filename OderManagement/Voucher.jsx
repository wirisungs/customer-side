import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

import { ImagesAssets } from "../Image";
// import { API_URL } from '@env';

import HeaderForStack from "../components/Header/HeaderForStack";

export default function Voucher({ navigation,route }) {
  const { number, name, namepro, kl, sl, dai, rong, cao, note, phone, location, GHTKCost, GHNCost, GHTLCost, GHTPCost,formattedCost,pth} = route.params || {};
  const [promotions, setPromotions] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://172.31.54.110:4001/api/promotion');
          const promotionsData = await response.json();
          setPromotions(promotionsData);
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu:', error);
        }
      }; //192.168.1.18
  
      fetchData();
    }, []);

  const Search = () => {
    const [text, setText] = useState("");
    return (
      <View style={styles.inputAll}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholder="Nhập mã giảm giá"
            placeholderTextColor="#1C1C1C"
            style={styles.input}
          />
        
        </View>
        <TouchableOpacity style={styles.imgnext}>
            <Image source={ImagesAssets.search} style={styles.imgnext2} />
          </TouchableOpacity>
      </View>
    );
  };
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const ktvoucher = (item) => {
    if (formattedCost < item.PriceOn) {
      Alert.alert('Chú ý', 'Đơn hàng không đủ điều kiện áp dụng mã giảm giá!');
      return;
    }
    else{
      navigation.navigate('CreateStep2', {
            number,
            name,
            namepro,
            kl,
            sl,
            dai,
            rong,
            cao,
            note,
            phone,
            location,
            GHTKCost,
            GHNCost,
            GHTLCost,
            GHTPCost,
            voucher:item,
            pth
      });
    }
   
  };
  return (
    <View style={styles.container}>
      <HeaderForStack screenName={"Mã giảm giá"} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.text1}>Mã giảm giá</Text>
         
          <Search />
          <View style={styles.box1}>
            <Text style={styles.text2}>
              Chú ý: Mã giảm giá chỉ được cấp tại
            </Text>
            <Text style={styles.text2}>ThienPhucExpress.com/voucher/</Text>
            
          </View>
          <Text style={styles.text1}>Mã giảm giá của tôi</Text>
          {promotions.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => ktvoucher(item)}>
             <View style={styles.boxMain}>
              <View style={styles.boxMain1}>
                <Image source={ImagesAssets.promo} style={styles.imgpromo} />
              </View>
              <View style={styles.boxMain2}>
                <Text
                  style={styles.textdiss}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.Name}
                </Text>
                <Text style={styles.text3}>Lưu ý</Text>
                <Text style={styles.text3}>Chỉ áp dụng cho đơn trên {formatPrice(item.PriceOn)}đ</Text>
                <Text style={styles.text3}>Giảm {formatPrice(item.Discount)}đ</Text>
              </View>
            </View>
            </TouchableOpacity>
        
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    padding: 24,
  },
  text1: {
    color: "#1C1C1C",
    fontSize: 20,
    fontWeight: "700",
  },
  imgpromo: {
    width: 50,
    height: 50,
  },
  textdiss: {
    color: "#1C1C1C",
    fontSize: 14,
    fontWeight: "700",
  },
  inputAll: {
    backgroundColor: "#F3F4F6",
    padding: 16,
    borderRadius: 24,
    marginVertical: 12,
    marginTop: 24,
    flexDirection:'row',
 
  },
  input: {
    fontSize: 16,
    color: "#1C1C1C",
    fontWeight: "600",
    width:'90%'
  },
  imgnext2: {
    height: 25,
    width: 25,
    alignSelf:'flex-end'
  },
  imgnext:{
    
  },
  inputContainer: {
    flexDirection: "row",
  },
  box1: {
    alignItems: "center",
    marginBottom: 18,
  },
  text2: {
    color: "#808080",
    fontSize: 12,
  },
  boxMain: {
    borderRadius: 24,
    marginVertical: 16,
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: "#808080",
  },
  boxMain1: {
    backgroundColor: "#FBA333",
    width: "25%",
    height: 90,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  boxMain2: {
    padding: 16,
    flex: 1,
  },
  text3: {
    fontSize: 10,
  },
});
