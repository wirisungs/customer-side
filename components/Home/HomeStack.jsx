import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import FeeCal from "../../screens/FeeCal";
import RouteManager from "../Navbar/RouteManager";
import Service from "../../screens/Service";
import CheckPost from "../../screens/CheckPost";
import Login from "../../OderManagement/Auth/Login";
import Register from "../../OderManagement/Auth/Register";
import OTP from "../../OderManagement/Auth/OTP";
import Forgot from "../../OderManagement/Auth/Forgot";
import CreateStep1 from "../../OderManagement/CreateStep1";
import CreateStep2 from "../../OderManagement/CreateStep2";
import CreateStep3 from "../../OderManagement/CreateStep3";
import CreateDone from "../../OderManagement/CreateDone";
import OrderDetail from "../../OderManagement/OrderDetail";
import Voucher from "../../OderManagement/Voucher";
import More from "../../OderManagement/map";
import OrderOfMe from "../../OderManagement/Oder/OrderMain";
import OrderMain from "../../OderManagement/Oder/OrderMain";
import TestPush from "../../OderManagement/Main/Mess";

import {app} from '../../firebase/firebaseConfig'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
const auth = getAuth(app);

const HomeStack = () => {
  const stack = createStackNavigator();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };
  return (
    <stack.Navigator initialRouteName="LoginPage">
      {/* Auth Stack */}

      <stack.Screen
        name="Home"
        // component={RouteManager}
        options={{ headerShown: false }}
      >
       {props => <RouteManager {...props} user={user} onLogout={handleLogout} />}
      </stack.Screen>
      <stack.Screen
        name="LoginPage"
        component={Login}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="RegisterPage"
        component={Register}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="Forgot"
        component={Forgot}
        options={{ headerShown: false }}
      />

      {/* Order Stack */}

      <stack.Screen
        name="CreateStep1"
        component={CreateStep1}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="CreateStep2"
        component={CreateStep2}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="CreateStep3"
        component={CreateStep3}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="CreateDone"
        component={CreateDone}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="OrderMain"
        component={OrderMain}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="MoreDeli"
        component={More}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="VoucherPage"
        component={Voucher}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="OrderOfMe"
        component={OrderOfMe}
        options={{ headerShown: false }}  // {props => <Home {...props} user={user} onLogout={handleLogout} />}
      />

     
      <stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="TraCuocPhi"
        component={FeeCal}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Service"
        component={Service}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="CheckPost"
        component={CheckPost}
        options={{ headerShown: false }}
      />
       <stack.Screen
        name="TestPush"
        component={TestPush}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeStack;
