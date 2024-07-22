import React from 'react';
import { StyleSheet, View } from 'react-native';
import GreenHeader from './Header/GreenHeader';
import DetailOrder from './Main/DetailOrder';

export default function OrderDetail({ navigation }) {
  // const nameHeader = "Chi tiết";
  return (
    <View style={styles.container}>
        {/* <GreenHeader navigation={navigation} nameHeader={nameHeader}/> */}
        <DetailOrder  navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});
