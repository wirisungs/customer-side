import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderForStack from '../components/Header/HeaderForStack';
import Step3 from './Main/Step3';

export default function CreateStep3({ navigation }) {
  const nameHeader = "Chuyển khoản";
  return (
    <View style={styles.container}>
       <HeaderForStack screenName={"Chuyển khoản"} />
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
