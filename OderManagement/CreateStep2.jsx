import React from 'react';
import { StyleSheet, View } from 'react-native';
import GreenHeader from './Header/GreenHeader';
import Step2 from './Main/Step2';

export default function CreateStep2({ navigation }) {
  const nameHeader = "Chọn dịch vụ";
  return (
    <View style={styles.container}>
        <GreenHeader navigation={navigation} nameHeader={nameHeader}/>
        <Step2  navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});
