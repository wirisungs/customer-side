import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity,Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ImagesAssets } from '../../Image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from "@react-navigation/native";

export default function Step2({ navigation }) {
  const route = useRoute();
  const [selectedItem, setSelectedItem] = useState(null);
  const [promotions, setPromotions] = useState([]);
  const { number, name, namepro, kl, sl, dai, rong, cao, note, phone, location, GHTKCost, GHNCost, GHTLCost, GHTPCost,pth } = route.params;
  const {voucher} = route.params || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.31.54.110:4001/api/service');   
        const promotionsData = await response.json();
        setPromotions(promotionsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const formatPriceTurn = (price) => {
    // Loại bỏ tất cả dấu phân cách và chuyển đổi về số nguyên
    return parseInt(price.toString().replace(/\./g, ''));
  };

  const handleSubmit = async () => {
  
    if (!selectedItem || !selectedItem.Name.trim()) {
      Alert.alert('Lỗi', 'Bạn cần chọn loại dịch vụ!');
      return;
    }

    try {
      const response = await fetch('http://172.31.54.110:4001/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Address: location,
          Code: generateRandomString(10),
          Detail: namepro,
          Price: formatPriceTurn(getCost(selectedItem?.Name)) - (voucher ? voucher.Discount : 0),
          ReceiverName: name,
          SDT: number,
          KL: kl,
          SL: sl,
          Width: rong,
          Height: cao,
          Length: dai,
          Note: note,
          Status: 'Chờ vận chuyển',
          driverID: "",
          Email: phone,
          PTH: pth
        }),
      });

      const result = await response.json();

      if (response.ok) {
        navigation.navigate('CreateDone');
       
      } else {
        Alert.alert('Lỗi', result.error || 'Có lỗi xảy ra khi gửi dữ liệu.');
      }
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
      Alert.alert('Lỗi', 'Có lỗi xảy ra khi gửi dữ liệu.');
    }
  };
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const getCost = (name) => {
    switch (name) {
      case "Giao hàng tiết kiệm":
        return formatPrice(GHTKCost);
      case "Giao hàng nhanh":
        return formatPrice(GHNCost);
      case "Giao hàng tên lửa":
        return formatPrice(GHTLCost);
      case "Thiên Phúc giao hàng":
        return formatPrice(GHTPCost);
      default:
        return "";
    }
  };
  const formattedCost = formatPriceTurn(getCost(selectedItem?.Name));

  const nextvoucher = () => {
    if (!selectedItem || !selectedItem.Name.trim()) {
      Alert.alert('Lỗi', 'Bạn cần chọn loại dịch vụ!');
      return;
    }
    else{
      navigation.navigate('VoucherPage', {
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
        formattedCost,
        pth
      });
    }
   
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.rowallall}>
          {promotions.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedItem(item)}>
              <View style={styles.rowall}>
                <View style={styles.rowred} />
                <View style={styles.rowmain}>
                  <Text style={styles.text1}>{item.Name}</Text>
                  <View style={styles.row1}>
                    <Text style={styles.text2}>Thời gian giao dự kiến: {item.Time}</Text>
                    <Text style={styles.text3}>{getCost(item.Name)}đ</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.texttopic1}>Áp dụng mã giảm giá</Text>
        
        <View style={styles.rowvoucher}>
        <Text style={styles.textTopic}>
            {voucher && voucher.Discount > 0 ? `Đã giảm ${voucher.Discount}đ` : 'Chọn mã giảm giá'}
        </Text>
          <TouchableOpacity style={styles.imgnext} onPress={nextvoucher}>
            <Image
              source={ImagesAssets.nextright}
              style={styles.imgnext2}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.texttopic1}>Hình thức thanh toán</Text>
        <View style={styles.rowvoucher}>
          <Text style={styles.textTopic}>Thanh toán chuyển khoản</Text>
          <TouchableOpacity style={styles.imgnext} onPress={() => navigation.navigate('CreateStep3')}>
            <Image
              source={ImagesAssets.nextright}
              style={styles.imgnext2}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.texttopic1}>Dịch vụ đã chọn</Text>
        <View style={styles.box1}>
          {selectedItem ? (
            <View>
              <Text style={styles.namedv}>{selectedItem.Name}</Text>
              <Text style={styles.nametime}>Thời gian dự kiến: {selectedItem.Time}</Text>
            </View>
          ) : (
            <Text style={styles.namedv}>Chưa chọn dịch vụ</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleSubmit}>
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
  texttopic1: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 24,
    color: '#1C1C1C',
  },
  textTopic: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    padding: 20,
    borderRadius: 26,
    color: '#808080',
    fontWeight: '400',
    fontSize: 16,
    width: '100%',
  },
  rowvoucher: {
    flexDirection: 'row',
    // marginBottom:24
  },
  imgnext: {
    height: '20%',
    width: '3%',
    position: 'absolute',
    right: 20,
    top: 25,
  },
  imgnext2: {
    height: '100%',
    width: '100%',
  },
  namedv: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1C',
  },
  nametime: {
    fontSize: 10,
    marginTop: 10,
  },
  box1: {
    borderWidth: 1,
    borderColor: '#03A63C',
    padding: 24,
    borderRadius: 20,
    borderStyle: 'dotted',
  },
  btnsuccess: {
    padding: 20,
    marginVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  textbtn: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
});
