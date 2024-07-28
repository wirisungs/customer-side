import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "tailwindcss/tailwind.css";

// Screen
import Home from "../../screens/Home";
import Order from "../../screens/Order";
import Offer from "../../screens/Offer";
import Support from "../../screens/Support";
import CreateOrder from "../../screens/CreateOrder";

// Icon
import HomeIC from "../../Icons/Home";
import OrderIC from "../../Icons/Box";
import OfferIC from "../../Icons/voucher";
import SupportIC from "../../Icons/support";
import CreateIC from "../../Icons/plus";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/Profile";
import HomeStack from "../Home/HomeStack";
import CreateStep1 from "../../OderManagement/CreateStep1";

const homeName = "Trang chủ";
const orderName = "Đơn hàng";
const offerName = "Ưu đãi";
const supportName = "Hỗ trợ";
const createOrderName = "Lên đơn";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const RouteManager = ({route}) => {
  const { phone } = route.params || {};
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingHorizontal: 6,
          paddingTop: 16,
          showLabel: false,
          height: "10%",
          paddingBottom: 12,
        },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={Home}
        initialParams={{ phone }}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View className="flex flex-col items-center gap-[6px]">
              <HomeIC fill={focused ? "#04BF45" : "#1c1c1c"} />
              <Text
                className="text-[10px]"
                style={{ color: focused ? "#04BF45" : "#1c1c1c" }}
              >
                Trang chủ
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={orderName}
        component={Order}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View className="flex flex-col items-center gap-[6px]">
              <OrderIC fill={focused ? "#04BF45" : "#1c1c1c"} />
              <Text
                className="text-[10px]"
                style={{ color: focused ? "#04BF45" : "#1c1c1c" }}
              >
                Đơn hàng
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={createOrderName}
        component={CreateStep1}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <LinearGradient
              className="flex w-16 h-10 items-center justify-center rounded-3xl"
              colors={["#04BF45", "#1C9546"]}
              style={styles.shadow}
            >
              <CreateIC />
            </LinearGradient>
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={offerName}
        component={Offer}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View className="flex flex-col items-center gap-[6px]">
              <OfferIC fill={focused ? "#04BF45" : "#1c1c1c"} />
              <Text
                className="text-[10px]"
                style={{ color: focused ? "#04BF45" : "#1c1c1c" }}
              >
                Ưu đãi
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={supportName}
        component={Support}
        initialParams={{ phone }}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View className="flex flex-col items-center gap-[6px]">
              <SupportIC fill={focused ? "#04BF45" : "#1c1c1c"} />
              <Text
                className="text-[10px]"
                style={{ color: focused ? "#04BF45" : "#1c1c1c" }}
              >
                Hỗ trợ
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1, // Đặt shadow lên trên
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default RouteManager;
