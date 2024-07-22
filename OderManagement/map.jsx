import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import GreenHeader from "./Header/GreenHeader";
import { LinearGradient } from "expo-linear-gradient";
import { ImagesAssets } from "../Image";
// import WebView from 'react-native-webview';

export default function Map({ navigation }) {
  const nameHeader = "Vận chuyển";
  return (
    <View style={styles.container}>
      <GreenHeader navigation={navigation} nameHeader={nameHeader} />

      <View style={styles.map}>
        {/* <WebView
            source={{ uri: 'https://www.google.com/maps/place/220+%C4%90.+Tr%E1%BA%A7n+B%C3%ACnh+Tr%E1%BB%8Dng,+Ph%C6%B0%E1%BB%9Dng+4,+Qu%E1%BA%ADn+5,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7616088,106.6795888,18.04z/data=!4m6!3m5!1s0x31752f1c502245c1:0xb7ce1a411b5e8d60!8m2!3d10.7613982!4d106.680514!16s%2Fg%2F11gh_7183x?hl=vi-VN&entry=ttu' }}
            style={styles.imgMap}
          /> */}
      </View>

      <LinearGradient colors={["#04BF45", "#1C9546"]} style={styles.bottom}>
        <View>
          <Text style={styles.text1}>Nhân viên vận chuyển</Text>
          <View style={styles.row2}>
            <Image
              source={ImagesAssets.ava}
              style={styles.imgAva}
              resizeMode="contain"
            />
            <View style={styles.row3}>
              <Text style={styles.name}>Pí Sữa</Text>
              <Text style={styles.phone}>0916070xxx</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imgMap: {
    height: 400,
    width: "100%",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "15%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 16,
  },
  imgAva: {
    height: 45,
    width: 45,
  },
  text1: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  row2: {
    flexDirection: "row",
    marginVertical: 12,
    alignItems: "center",
  },
  phone: {
    color: "#ffffff",
    fontSize: 13,
  },
  name: {
    color: "#ffffff",
    fontSize: 16,
  },
  row3: {
    marginHorizontal: 16,
  },
  map: {
    // backgroundColor:'#ffff00',
    height: "100%",
  },
});
