import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutUs from '../screens/AboutUs';

const Tab = createMaterialTopTabNavigator();

function NewsAndEventsGalleryStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={AboutUs} />
      <Tab.Screen name="Event Gallery" component={AboutUs} />
    </Tab.Navigator>
  );
}

export default NewsAndEventsGalleryStack;