import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

import DetailOrder from './Main/DetailOrder';

export default function OrderDetail({ navigation,route }) {
  const { order } = route.params ;
  return (
    <View style={styles.container}>
        
        <DetailOrder  navigation={navigation} order={order}/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});
