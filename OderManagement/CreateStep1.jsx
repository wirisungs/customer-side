import React from 'react';
import { StyleSheet, View } from 'react-native';
import GreenHeader from './Header/GreenHeader';
import Step1 from './Main/Step1';

export default function CreateStep1({ navigation }) {
  const nameHeader = "Tạo đơn hàng";
  return (
    <View style={styles.container}>
        <GreenHeader navigation={navigation} nameHeader={nameHeader} />
        <Step1 navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
