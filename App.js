import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateStep1 from './OderManagement/CreateStep1';
import CreateStep2 from './OderManagement/CreateStep2';
import CreateStep3 from './OderManagement/CreateStep3';
import CreateDone from './OderManagement/CreateDone';
import Voucher from './OderManagement/Voucher';
import OrderDetail from './OderManagement/OrderDetail';
import OrderMain from './OderManagement/Oder/OrderMain';
import Map from './OderManagement/map';
import Login from './OderManagement/Auth/Login';
import Register from './OderManagement/Auth/Register';
import Forgot from './OderManagement/Auth/Forgot';
import OTP from './OderManagement/Auth/OTP';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="CreateStep1" 
          component={CreateStep1} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CreateStep2" 
          component={CreateStep2} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CreateStep3" 
          component={CreateStep3} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CreateDone" 
          component={CreateDone} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Voucher" 
          component={Voucher} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OrderDetail" 
          component={OrderDetail} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OrderMain" 
          component={OrderMain} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Map" 
          component={Map} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Forgot" 
          component={Forgot} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="OTP" 
          component={OTP} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
