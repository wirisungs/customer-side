import React from "react";
import { StyleSheet, View } from "react-native";
import Step2 from "./Main/Step2";
import HeaderForStack from "../components/Header/HeaderForStack";
import { useRoute } from "@react-navigation/native";

export default function CreateStep2({ navigation }) {
  const route = useRoute();
  const { GHTKCost, GHNCost, GHTLCost, GHTPCost, number, name, namepro, kl, sl, dai, rong, cao, note, phone,location,voucher,formattedCost,pth} = route.params;

  return (
    <View style={styles.container}>
      <HeaderForStack screenName={"Chọn dịch vụ"} />
      <Step2 
        navigation={navigation} 
        GHTKCost={GHTKCost} 
        GHNCost={GHNCost} 
        GHTLCost={GHTLCost} 
        GHTPCost={GHTPCost} 
        number={number}
        name={name}
        namepro={namepro}
        kl={kl}
        sl={sl}
        dai={dai}
        rong={rong}
        cao={cao}
        note={note}
        phone={phone}
        location={location}
        voucher={voucher}
        formattedCost={formattedCost}
        pth={pth}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
