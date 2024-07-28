import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderForStack from "../components/Header/HeaderForStack";

import ServiceBtn from "../components/Buttons/ServiceBtn";

import "tailwindcss/tailwind.css";
import Button from "../components/Buttons/Button";
import { useRoute } from "@react-navigation/native";

const Service = () => {
  const route = useRoute();
  const GHTKCost = route.params.GHTKCost;
  const GHNCost = route.params.GHNCost;
  const GHTLCost = route.params.GHTLCost;
  const GHTPCost = route.params.GHTPCost;

  return (
    <View>
      <HeaderForStack screenName={"Dịch vụ"} />
      <View className="mt-[6px] flex bg-white h-full w-full rounded-3xl p-6">
        <View className="content flex flex-col gap-[8px]">
          <View className="flex flex-row title">
            <Text style={styles.header3}>Dịch vụ</Text>
          </View>
          <View className="ServicePrice pt-2 gap-y-4">
            <View>
              <ServiceBtn
                nameService={"Giao hàng tiết kiệm"}
                timeLine={"5-6"}
                Price={GHTKCost}
              />
            </View>
            <View>
              <ServiceBtn
                nameService={"Giao hàng nhanh"}
                timeLine={"2-3"}
                Price={GHNCost}
              />
            </View>
            <View>
              <ServiceBtn
                nameService={"Giao tên lửa"}
                timeLine={"trong"}
                Price={GHTLCost}
              />
            </View>
            <View>
              <ServiceBtn
                nameService={"Giao hàng Thiên Phúc"}
                timeLine={"trong"}
                Price={GHTPCost}
              />
            </View>
          </View>
          <View className="flex flex-col title pt-4">
            <Text className="text-[12px] font-bold">Lưu ý</Text>
            <View className="flex flex-col pl-2 pt-2">
              <Text>
                <Text className="text-[12px] text-[#03A63C] font-bold">
                  {"\u2B24"} Giao hàng tên lửa {"\u0026"} Giao hàng Thiên Phúc
                </Text>
                <Text className="text-[12px]"> chỉ giao hàng nội thành</Text>
              </Text>

              <Text>
                <Text className="text-[12px] text-[#03A63C] font-bold">
                  {"\u2B24"} Giao hàng Thiên Phúc
                </Text>
                <Text className="text-[12px]">
                  {" "}
                  sẽ tăng thêm 30.000đ nếu giao từ thời gian 00:00 - 05:00
                </Text>
              </Text>
            </View>
          </View>

          <Button screenName={"Home"} />
        </View>
      </View>
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

export default Service;
