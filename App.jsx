import React, { useState,useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './screens/Login';
import MainTabs from './utils/MainTabs';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginChecked, setLoginChecked] = useState(false);
  
  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(isLoggedIn==="true");
    setLoginChecked(true);
  };

  if (!loginChecked) {
    return null; // Render loading screen or splash screen while checking login status
  }

  return (
    <NavigationContainer independent={true}>
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
