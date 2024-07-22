import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ImagesAssets } from '../../Image';

export default function GreenHeader({ navigation, nameHeader }) {
  return (
    <LinearGradient
      colors={['#04BF45', '#1C9546']}
      style={styles.headAll}
    >
      <View style={styles.row1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={ImagesAssets.BackWhite}
            style={styles.imgBack}
          />
        </TouchableOpacity>
        <View style={styles.dg}>
          <Text style={styles.textTopic}>{nameHeader}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headAll: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 34
  },
  imgBack: {
    height: 30,
    width: 30,
    position: 'absolute',
    top: -15,
  },
  textTopic: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  dg: {
    flex: 1,
    alignItems: 'center',
  },
});
