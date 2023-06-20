import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BirthdayList from '../screens/BirthdayList';

const Tab = createMaterialTopTabNavigator();

function BirthdayListTabs() {
  return (
    <Tab.Navigator initialRouteName='Staff'>
      <Tab.Screen name="Staff">{() => <BirthdayList name="Staff"/>}</Tab.Screen>
      <Tab.Screen name="Students">{() => <BirthdayList name="Students"/>}</Tab.Screen>
    </Tab.Navigator>
  );
}

export default BirthdayListTabs;