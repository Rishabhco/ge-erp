import React, { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

import Login from './screens/Login';
import MainTabs from './utils/MainTabs';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import NotificationController from './NotificationController.android';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <NavigationContainer independent={true}>
      {/* <NotificationController/> */}
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={isLoggedIn?'MainTabs':'Login'}>
        <Stack.Screen name="MainTabs" component={MainTabs}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
