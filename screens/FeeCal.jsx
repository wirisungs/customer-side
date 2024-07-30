import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import "tailwindcss/tailwind.css";
import HeaderForStack from "../components/Header/HeaderForStack";
import Dropdown from '../Icons/Dropdown'

// API
import { geocodeAddress } from "../api";

// icons
import EnterInput from "../components/Input/EnterInput";
import Checkbox from "../components/Input/Checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const FeeCal = ({route}) => {
  const { location,
    locationsend, 
    number,
    name,
    namepro,
    kl,
    sl,
    dai,
    rong,
    cao,
    note,
    phone,
    pth 
  } = route.params || {};
  const [addressPickup, setAddressPickup] = useState(locationsend || "");
  const [addressDrop, setAddressDrop] =useState(location || "");
  const [weight, setWeight] = useState("");

  const [coordinatesPickup, setCoordinatesPickup] = useState([]);
  const [coordinatesDrop, setCoordinatesDrop] = useState([]);
 
  const {  } = route.params || {};
  // Kết quả tính
  const [GHTKCost, setGHTKCost] = useState(null);
  const [GHNCost, setGHNCost] = useState(null);
  const [GHTLCost, setGHTLCost] = useState(null);
  const [GHTPCost, setGHTPCost] = useState(null);

  const [isPickNull, setIsPickNull] = useState(false);
  const [isDropNull, setIsDropNull] = useState(false);
  const [isWeightNull, setIsWeightNull] = useState(false);
  const [isExists, setIsExists] = useState(true);

  // Navigation
  const navigation = useNavigation();

  const handleNavigation = (costs) => {
    if(!namepro ){
      navigation.navigate("Service",{...costs})
    }
    else{
      navigation.navigate("CreateStep2", {
        ...costs,
        number,
        name,
        namepro,
        kl,
        sl,
        dai,
        rong,
        cao,
        note,
        phone,
        location,
        pth
      });
    }
  };
  
  const checkNull = () => {
    setIsPickNull(addressPickup === "" ? true : false);
    setIsDropNull(addressDrop === "" ? true : false);
    setIsWeightNull(weight === "" ? true : false);
  };

  

  const checkInVN = (data1, data2) => {
    if (
      data1.items[0].address.countryCode !== "VNM" ||
      data2.items[0].address.countryCode !== "VNM"
    ) {
      setIsExists(false);
      return false;
    } else {
      setIsExists(true);
      return true;
    }
  };

  const handleSearch = async () => {
    checkNull();
    try {
      const data1 = await geocodeAddress(addressPickup);
      const data2 = await geocodeAddress(addressDrop);
      console.log(data1.items[0].address.countryCode);
      console.log(data2.items);

      if (checkInVN(data1, data2)) {
        if (data1.items && data1.items.length > 0) {
          const coord1 = data1.items.map((item) => item.position);
          setCoordinatesPickup(coord1);
        } else {
          setCoordinatesPickup([]);
        }

        if (data2.items && data2.items.length > 0) {
          const coord2 = data2.items.map((item) => item.position);
          setCoordinatesDrop(coord2);
        } else {
          setCoordinatesDrop([]);
        }
      }
    } catch (e) {
      setIsExists(false);
      setCoordinatesPickup([]);
      setCoordinatesDrop([]);
    }
  };

  const Calcula = () => {
    // Biến
    const LatitudeStart = coordinatesPickup[0].lat;
    const LongtitudeStart = coordinatesPickup[0].lng;

    const LatitudeDrop = coordinatesDrop[0].lat;
    const LongtitudeDrop = coordinatesDrop[0].lng;

    // Đường kính trái đất
    const R = 6371e3;

    // Đổi tọa đồ sang radian
    const latStart = (LatitudeStart * Math.PI) / 180;
    const latDrop = (LatitudeDrop * Math.PI) / 180;

    // Delta Latitude => radian
    const DeltaLa = ((LatitudeStart - LatitudeDrop) * Math.PI) / 180;
    // Delta Longtitude => radian
    const DeltaLong = ((LongtitudeStart - LongtitudeDrop) * Math.PI) / 180;

    // Áp dụng haversine
    const a =
      Math.sin(DeltaLa / 2) * Math.sin(DeltaLa / 2) +
      Math.cos(latStart) *
        Math.cos(latDrop) *
        Math.sin(DeltaLong / 2) *
        Math.sin(DeltaLong / 2);

    // c => Góc giữa 2 bề mặt hình cầu
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = ((R * c) / 1000).toFixed(1);
    console.log(distance, "km");

    // Giao hàng tiết kiệm
    let GHTK;
    GHTK = 12500 + 1000 * distance + (1000 * weight) / 1000;
    // Giao hàng nhanh
    let GHN;
    GHN = 20000 + 2000 * distance + (2500 * weight) / 1000;
    // Giao hàng nhanh
    let GHTL;
    GHTL = 50000 + 4000 * distance + (3000 * weight) / 1000;

    let GHTP;
    GHTP = 300000 + 4000 * distance + (3000 * weight) / 1000;
    return { GHTKCost: GHTK, GHNCost: GHN, GHTLCost: GHTL, GHTPCost: GHTP };
  };

  useEffect(() => {
    console.log(weight)
    if (
      coordinatesPickup.length > 0 &&
      coordinatesDrop.length > 0 &&
      weight.length >0
    ) {
      const costs = Calcula();
      setGHTKCost(costs.GHTKCost);
      setGHNCost(costs.GHNCost);
      setGHTLCost(costs.GHTLCost);
      setGHTPCost(costs.GHTPCost);
      handleNavigation(costs);
    }
  }, [coordinatesPickup, coordinatesDrop]);
  return (
    <View className="flex flex-1">
      <HeaderForStack screenName="Tra tính cước phí" />

      <ScrollView className="mt-[6px] p-6 h-full bg-white rounded-3xl">
        <View>
          <View className="content flex flex-col gap-[8px]">
            <View className="flex flex-row title">
              <Text style={styles.header3}>Khoảng cách</Text>
              <Text className="ml-2 text-[20px] text-[#BF0A04]">*</Text>
            </View>
            <View className="inputContainer flex flex-rol">
              <View className="flex flex-col title gap-y-[6px]">
                <View>
                  <Text style={styles.content}>Nơi gửi</Text>
                </View>
                <View
                  className=" flex flex-row items-center border-solid border-2 rounded-2xl w-full p-3 mt-[6px] "
                  style={
                    isPickNull
                      ? { borderColor: "#FF0000" }
                      : { borderColor: "#E2E2E2" }
                  }
                >
                  <TextInput
                    placeholder={"Tỉnh / Thành / Quận / Huyện"}
                    onChangeText={setAddressPickup}
                    value= {addressPickup}
                    onChange={() => setIsPickNull(false)}
                  />
                </View>

                {/* Ví dụ */}
                <View className=" flex flex-row items-center w-full mt-[6px] ">
                  <Text>
                    <Text className="text-[14px] text-[#1c1c1c]">
                      VD: Người gửi ở
                    </Text>
                    <Text className="text-[14px] text-yellow-500 font-bold">
                      {" "}
                      Huyện Nhà Bè
                    </Text>
                    <Text className="text-[14px] text-[#1c1c1c]">
                      {" "}
                      thì chỉ ghi
                    </Text>
                    <Text className="text-[14px] text-yellow-500 font-bold">
                      {" "}
                      "Nha Be"
                    </Text>
                  </Text>
                </View>
              </View>

              <View className="flex flex-col title gap-y-[6px] mt-4">
                <View>
                  <Text style={styles.content}>Nơi nhận</Text>
                </View>
                <View
                  className=" flex flex-row items-center border-solid border-2 rounded-2xl w-full p-3 mt-[6px] "
                  style={
                    isDropNull
                      ? { borderColor: "#FF0000" }
                      : { borderColor: "#E2E2E2" }
                  }
                >
                  <TextInput
                    placeholder={"Tỉnh / Thành / Quận / Huyện"}
                    onChangeText={setAddressDrop}
                    value= {addressDrop}
                    onChange={() => setIsDropNull(false)}
                  />
                </View>

                {/* Ví dụ */}
                <View className=" flex flex-row items-center w-full mt-[6px] ">
                  <Text>
<Text className="text-[14px] text-[#1c1c1c]">
                      VD: Người nhận ở
                    </Text>
                    <Text className="text-[14px] text-yellow-500 font-bold">
                      {" "}
                      Quận 5
                    </Text>
                    <Text className="text-[14px] text-[#1c1c1c]">
                      {" "}
                      thì chỉ ghi
                    </Text>
                    <Text className="text-[14px] text-yellow-500 font-bold">
                      {" "}
                      "Quan 5"
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            {/* Notice */}
            {!isExists ? (
              <View className=" flex flex-row items-center w-full mt-[6px] ">
                <Text className="text-[14px] text-red-600">
                  * Địa chỉ phải thuộc Việt Nam
                </Text>
              </View>
            ) : (
              ""
            )}
          </View>
          <View className="content flex flex-col gap-[8px] mt-6">
            <View className="flex flex-row title mb-[6px]">
              <Text style={styles.header3}>Kích thước & khối lượng</Text>
            </View>
            <View className="inputContainer flex flex-row mb-1">
              {/* Component input  */}

              <View className="flex flex-row items-center mr-3">
                <TextInput
                  editable
                  multiline
                  numberOfLines={1}
                  maxLength={10}
                  placeholder="Nặng"
                  onChangeText={setWeight}
                  onChange={() => setIsWeightNull(false)}
                  className="w-[90px] h-[57px] px-6 border-2 border-solid border-r-0 rounded-l-3xl"
                  style={
                    isWeightNull
                      ? { borderColor: "#FF0000" }
                      : { borderColor: "#E2E2E2" }
                  }
                />
                <LinearGradient
                  className="flex items-center justify-center w-[80px] h-[57px]  rounded-r-3xl"
                  colors={["#04BF45", "#1C9546"]}
                >
                  <TouchableOpacity className="flex flex-row">
                    <Text className="text-white text-[16px]">g</Text>
                    <Dropdown fill="#fff" />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View>
                <EnterInput placeholder={"Cao"} />
              </View>
            </View>

            <View className="inputContainer flex flex-row">
              <View>
                <EnterInput placeholder={"Dài"} />
              </View>
              <View>
                <EnterInput placeholder={"Rộng"} />
              </View>
            </View>

            <View className="checkBox flex flex-row mb-3">
<View className="flex-1">
                <Checkbox Content={"Thu hộ phí COD"} />
                {/* Notice */}
                {isPickNull || isDropNull || isWeightNull ? (
                  <View className=" flex flex-row items-center w-full mt-[6px] ">
                    <Text className="text-[14px] text-red-600">
                      * Không được để trống những ô đỏ
                    </Text>
                  </View>
                ) : (
                  ""
                )}
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={() => handleSearch()}>
            <LinearGradient
              className="mt-8 p-3 flex flex-row relative justify-center items-center rounded-3xl"
              colors={["#04BF45", "#1C9546"]}
            >
              <Text className="text-white text-[20px] font-bold">
                {"Hoàn thành"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  head1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  header3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1c1c1c",
  },
  content: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#1c1c1c",
  },
});

export default FeeCal;


