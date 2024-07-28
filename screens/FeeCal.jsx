import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "tailwindcss/tailwind.css";
import HeaderForStack from "../components/Header/HeaderForStack";

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
    phone 
  } = route.params || {};
  const [addressPickup, setAddressPickup] = useState(locationsend || "");
  const [addressDrop, setAddressDrop] =useState(location || "");
  const [coordinatesPickup, setCoordinatesPickup] = useState([]);
  const [coordinatesDrop, setCoordinatesDrop] = useState([]);
 
  const {  } = route.params || {};
  // Kết quả tính
  const [GHTKCost, setGHTKCost] = useState(null);
  const [GHNCost, setGHNCost] = useState(null);
  const [GHTLCost, setGHTLCost] = useState(null);
  const [GHTPCost, setGHTPCost] = useState(null);

  const [isNull, setIsNull] = useState(false);
  const [isExists, setIsExists] = useState(true);

  // Navigation
  const navigation = useNavigation();

  const handleNavigation = (costs) => {
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
      location
    });
  };
  

  const handleSearch = async () => {
    if (addressPickup === "" || addressDrop === "") {
      setIsNull(true);
      return;
    } else {
      setIsNull(false);
    }
    try {
      const data1 = await geocodeAddress(addressPickup);
      const data2 = await geocodeAddress(addressDrop);
      console.log(data1.items);
      console.log(data2.items);

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

    const kl = 3200;

    // Giao hàng tiết kiệm
    let GHTK;
    if (kl <= 2500) {
      GHTK = 22000;
    } else {
      const klconlai = kl - 2500;
      GHTK = 22000;
      const solan500g = Math.round(klconlai / 500);

      for (let i = 0; i < solan500g; i++) {
        GHTK += 3500;
      }
    }
    // Giao hàng nhanh
    let GHN;
    if (distance <= 8) {
      GHN = 23000;
    } else {
      const QDConLai = (distance - 8).toFixed();
      GHN = 23000;

      for (let i = 0; i < QDConLai; i++) {
        GHN += 18000;
      }
    }
    // Giao hàng nhanh
    let GHTL;
    if (distance <= 4) {
      GHTL = 50000;
    } else {
      const QDConLai = (distance - 4).toFixed();
      GHTL = 25000;

      for (let i = 0; i < QDConLai; i++) {
        GHTL += 18000;
      }
    }

    let GHTP = 0;

    for (let i = 0; i < distance; i++) {
      GHTP += 300000;
    }
    return { GHTKCost: GHTK, GHNCost: GHN, GHTLCost: GHTL, GHTPCost: GHTP };
  };

  useEffect(() => {
    if (coordinatesPickup.length > 0 && coordinatesDrop.length > 0) {
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
              {/* <Text style={styles.header3}>{name}</Text>
              <Text style={styles.header3}>{namepro}</Text> */}
              <Text className="ml-2 text-[20px] text-[#BF0A04]">*</Text>
            </View>
            <View className="inputContainer flex flex-rol">
              <View className="flex flex-col title gap-y-[6px]">
                <View>
                  <Text style={styles.content}>Nơi gửi</Text>
                </View>
                <View className=" flex flex-row items-center border-solid border-2 border-[#e2e2e2] rounded-2xl w-full p-3 mt-[6px] ">
                  <TextInput
                    placeholder={"Tỉnh / Thành / Quận / Huyện"}
                    value={addressPickup}
                    onChangeText={setAddressPickup}
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
                <View className=" flex flex-row items-center border-solid border-2 border-[#e2e2e2] rounded-2xl w-full p-3 mt-[6px] ">
                  <TextInput
                    placeholder={"Tỉnh / Thành / Quận / Huyện"}
                    value={addressDrop}
                    onChangeText={setAddressDrop}
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

                {/* Notice */}
                {isNull ? (
                  <View className=" flex flex-row items-center w-full mt-[6px] ">
                    <Text className="text-[14px] text-red-600">
                      * Không được để trống
                    </Text>
                  </View>
                ) : isExists ? (
                  ""
                ) : (
                  <View className=" flex flex-row items-center w-full mt-[6px] ">
                    <Text className="text-[14px] text-red-600">
                      * Không được để trống
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
          <View className="content flex flex-col gap-[8px] mt-6">
            <View className="flex flex-row title mb-[6px]">
              <Text style={styles.header3}>Kích thước & khối lượng</Text>
            </View>
            <View className="inputContainer flex flex-row mb-1">
              <View id="Weight">
                <EnterInput placeholder={"Nặng"} unitCustom={"g"} />
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

            <View className="checkBox flex flex-row">
              <View className="flex-1">
                <Checkbox Content={"Thu hộ phí COD"} />
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
