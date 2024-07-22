import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { GiaoHang_EV } from '../../Data/data';
import { ImagesAssets } from '../../Image';
import HomeIC from '../Icons/Home';
import { LinearGradient } from 'expo-linear-gradient';

export default function Step2({ navigation }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.rowallall}>
          {GiaoHang_EV.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedItem(item)}>
              <View style={styles.rowall}>
                <View style={styles.rowred} />
                <View style={styles.rowmain}>
                  <Text style={styles.text1}>{item.name}</Text>
                  <View style={styles.row1}>
                    <Text style={styles.text2}>Thời gian giao dự kiến: {item.time}</Text>
                    <Text style={styles.text3}>{item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.texttopic1}>Áp dụng mã giảm giá</Text>
        <View style={styles.rowvoucher}>
          <Text style={styles.textTopic}>Chọn mã giảm giá</Text>
           <TouchableOpacity  style={styles.imgnext} onPress={() => navigation.navigate('VoucherPage')} >
           <Image
            source={ImagesAssets.nextright}
            style={styles.imgnext2}
          />
        </TouchableOpacity>
        </View>
        <Text style={styles.texttopic1}>Hình thức thanh toán</Text>
        <View style={styles.rowvoucher}>
          <Text style={styles.textTopic}>Thanh toán chuyển khoản</Text>
         
        <TouchableOpacity  style={styles.imgnext} onPress={() => navigation.navigate('CreateStep3')} >
          <Image
            source={ImagesAssets.nextright}
            style={styles.imgnext2}
          />
        </TouchableOpacity>
        </View>
        <Text style={styles.texttopic1}>Dịch vụ đã chọn</Text>
        <View style={styles.box1}>
          {selectedItem ? (
            <View >
              <Text style={styles.namedv}>{selectedItem.name}</Text>
              <Text style={styles.nametime}>Thời gian dự kiến: {selectedItem.time}</Text>
            </View>
          ) : (
            <Text style={styles.namedv}>Chưa chọn dịch vụ</Text>
          )}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CreateDone')}>
        <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.btnsuccess}>
        <Text style={styles.textbtn}>Hoàn tất</Text>
        </LinearGradient>
        </TouchableOpacity>
       
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 24,
  },
  rowallall: {
    flexDirection: 'column',
  },
  rowmain: {
    backgroundColor: '#03A63C1F',
    padding: 24,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: '95%',
  },
  row1: {
    flexDirection: 'row',
  },
  rowall: {
    flexDirection: 'row',
    marginBottom: 10, 
  },
  rowred: {
    backgroundColor: '#F91313',
    width: '4%', 
    height: '100%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  text1: {
    fontWeight: '600',
    fontSize: 14,
  },
  text3: {
    position: 'absolute',
    right: 0,
    fontSize: 14,
    fontWeight: '600',
  },
  texttopic1:{
    fontSize: 20,
    fontWeight:'700',
    marginVertical:24,
    color:'#1C1C1C'
  },
  textTopic:{
    borderWidth: 1,
    borderColor:'#E2E2E2',
    padding: 20,
    borderRadius: 26,
    color:'#808080',
    fontWeight:'400',
    fontSize:16,
    width: '100%'
  },
  rowvoucher:{
    flexDirection:'row',
    // marginBottom:24
  },
  imgnext:{
    height:'20%',
    width:'3%',
    position:'absolute',
    right: 20,
    top:25
  },
  imgnext2:{
    height:'100%',
    width:'100%',
  },
  namedv: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1C',
  },
  nametime:{
    fontSize: 10,
    marginTop: 10
  },
  box1:{
    borderWidth: 1,
    borderColor:'#03A63C',
    padding:24,
    borderRadius:20,
    borderStyle:'dotted'
  },
  btnsuccess:{
    padding:20,
    marginVertical:16,
    borderRadius: 20,
    alignItems:'center'
  },
  textbtn:{
    fontSize: 20,
    fontWeight:'600',
    color:'#ffffff'
  }
});
