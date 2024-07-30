import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Order_EV } from '../../Data/data';

export default function OrderWait({ navigation }) {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.31.54.110:4001/api/orderwait');
        const promotionsData = await response.json();
        setPromotions(promotionsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };
//172.31.54.110
    fetchData();
  }, []);
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <View style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
        {promotions.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('OrderDetail',{order : item})}>
            <View style={styles.box}>
                <View style={styles.row1}>
                    <Text style={styles.macode}>{item.Code}</Text>
                    <Text style={styles.detail}>Chi tiết</Text>
                </View>
                <Text style={styles.mota}>{item.Detail}</Text>
                <View style={styles.row3}>
                    <Text style={styles.total}>Tổng:</Text>
                    <Text style={styles.price}>{formatPrice(item.Price)}đ</Text>
                </View>
            </View>
            </TouchableOpacity>
          ))}
        </ScrollView>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 24
  },
  box:{
    backgroundColor:'#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 12
  },
  row1:{
    flexDirection:'row',
    alignItems:'center'
  },
  macode:{
    fontSize: 25,
    fontWeight:'bold'
  },
  detail:{
    color:'#0313A6',
    fontSize: 14,
    position:'absolute',
    right: 0
  },
  row3:{
    flexDirection:'row',
    alignItems:'center'
  },
  mota:{
    color:'#808080',
    fontSize: 18,
    marginVertical: 8
  },
  total:{
    fontSize: 20
  },
  price:{
    color:'#FBA333',
    fontSize: 20,
    position:'absolute',
    right: 0
  }
});
