import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView,Alert, Modal } from 'react-native';
import { ImagesAssets } from '../../Image';
import { Order_EV } from '../../Data/data';

export default function OrderDone({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://172.31.54.110:4001/api/orderdone');
          const promotionsData = await response.json();
          setPromotions(promotionsData);
        } catch (error) {
          console.error('Lỗi khi lấy dữ liệu:', error);
        }
      };
  
      fetchData();
    }, []);
    const InputDG = () => {
        const [text, setText] = useState('');
        return (
          <View style={styles.inputAll}>
            <TextInput
              onChangeText={setText}
              value={text}
              placeholder="Đánh giá"
              placeholderTextColor={'#808080'}
              style={styles.input}
            />
          </View>
        );
      };
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
                <TouchableOpacity style={styles.btnDG} onPress={() => setModalVisible(true)}>
                   <Text style={styles.textDG}>Đánh giá nhân viên</Text>
                </TouchableOpacity>
            </View>
            </TouchableOpacity>
          ))}
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.boxcancel}>

                <Image source={ImagesAssets.bike} style={styles.imgDH} resizeMode='contain' />

                <Text style={styles.textcancel}>Đánh giá nhân viên</Text>

                <Image source={ImagesAssets.star} style={styles.imgStar} resizeMode='contain' />
                <InputDG/>
                <View style={styles.btnbackcancel}>

                  <TouchableOpacity style={styles.btnback} onPress={() => setModalVisible(false)}>
                    <Text style={styles.textback}>Trở về</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btncancel} onPress={() => navigation.navigate('OrderMain')}>
                    <Text style={styles.textcancel2}>Xác nhận</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

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
  },
  btnDG:{
    backgroundColor:'#FBA333',
    alignItems:'center',
    justifyContent:'center',
    padding: 12,
    borderRadius: 12,
    marginVertical: 12
  },
  textDG:{
    color:'#ffffff',
    fontWeight:'bold'
  },

  //box
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 36,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  boxcancel: {
    alignItems: 'center',
  },
  imgDH: {
    height: 150,
    width: 150,
  },
  textcancel: {
    color: '#1C1C1C',
    fontWeight: '700',
    fontSize: 25,
    marginVertical: 12,
  },
  btnbackcancel: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  btncancel: {
    backgroundColor: '#04BF45',
    padding: 8,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  textcancel2: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 12,
  },
  btnback: {
    borderWidth: 1,
    borderColor: '#04BF45',
    padding: 8,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  textback: {
    color: '#04BF45',
    fontSize: 20,
    fontWeight: '700',
    marginHorizontal: 12,
  },
  imgStar:{
    width:'50%',
    height:'5%'
  },
  input:{
    borderWidth: 1,
    borderColor:'#E2E2E2',
    borderRadius: 20,
    padding: 8
  },
  inputAll:{
    width:'100%',
    marginVertical: 12
  }
});
