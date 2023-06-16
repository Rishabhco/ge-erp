import { createStackNavigator } from '@react-navigation/stack';
import CommunicationTabs from './CommunicationTabs';
import CommunicationDetail from '../screens/CommunicationDetail';

const Stack = createStackNavigator();

export default function CommunicationStack({ navigation}) {
    return (
        <Stack.Navigator initialRouteName='Communications' screenOptions={{
            headerShown: true,
            headerTitleAlign:'center',
            headerStyle:{backgroundColor: '#233698'},
            headerTintColor:"#ffffff",
            title: 'Communication',
        }}>
            <Stack.Screen name="Communications" >{()=><CommunicationTabs navigation={navigation}/>}</Stack.Screen>
            <Stack.Screen name="CommunicationDetail" component={CommunicationDetail} />
        </Stack.Navigator>
    );
}