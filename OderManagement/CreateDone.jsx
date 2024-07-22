import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { ImagesAssets } from '../Image';
import { LinearGradient } from 'expo-linear-gradient';

export default function CreateDone({ navigation }) {
  return (
    <View style={styles.container}>
        <Image
            source={ImagesAssets.success}
            style={styles.imgSuccess}
            resizeMode='contain'
          />
        <TouchableOpacity onPress={() => navigation.navigate('OrderDetail')} style={styles.btnContainer}>
              <LinearGradient colors={['#04BF45', '#1C9546']} style={styles.btnsuccess}>
                  <Text style={styles.textbtn}>Trở về trang chủ</Text>
              </LinearGradient>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems:'center',
    padding:24
  },
  imgSuccess:{
     height:'70%',
     width:'70%'
  },
  btnContainer: {
    alignItems: 'center', 
    marginVertical: 16,
    position:'absolute',
    bottom: 20
  },
  btnsuccess: {
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    width: '180%', 
  },
  textbtn: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff' 
  }
});
