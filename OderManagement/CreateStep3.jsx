import React from 'react';
import { StyleSheet, View } from 'react-native';
import GreenHeader from './Header/GreenHeader';
import Step3 from './Main/Step3';

export default function CreateStep3({ navigation }) {
  const nameHeader = "Chuyển khoản";
  return (
    <View style={styles.container}>
        <GreenHeader navigation={navigation} nameHeader={nameHeader}/>
        <Step3  navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
});
