import { createStackNavigator } from '@react-navigation/stack';
import TimeTable from '../screens/TimeTable';
import Assessment from '../screens/Assessment';
import Attendance from '../screens/Attendance';
import StudentAttendance from '../screens/StudentAttendance';
import Dashboard from '../screens/Dashboard';
import BirthdayList from '../screens/BirthdayList';
import StudentList from '../screens/StudentList';
import ExaminationMarks from '../screens/ExaminationMarks';
import Communication from '../screens/Communication';
import AssignmentStack from './AssignmentStack';
import Reports from '../screens/Reports';
import Calendar from '../screens/Calendar';
import Marks from '../screens/Marks';
import AboutUs from '../screens/AboutUs';
import EventsHolidays from '../screens/EventsHolidays';
import NewsEventGallery from '../screens/NewsEventGallery';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {logout} from '../services/auth.services';

const Stack = createStackNavigator();

export default function DashboardStack({ navigation}) {
    const handleLogout = () => {
        logout().then((response) => {
            console.log(response);
            navigation.navigate('Login');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Stack.Navigator initialRouteName='Home' id="dashboardStack"
            screenOptions={{
                headerShown: true,
                headerTitleAlign:'center',
                headerStyle:{backgroundColor: '#233698'},
                headerTintColor:"#ffffff"
            }}
        >
            <Stack.Screen name="Home" component={Dashboard} options={{
                headerRight: () => (
                    <TouchableOpacity onPress={handleLogout} style={{ marginRight: 10 }}>
                        <Icon name="sign-out" size={24} color="#ffffff" />
                    </TouchableOpacity>
                ),
                headerLeft: null
            }}/>
            <Stack.Screen name="Attendance" component={Attendance}/>
            <Stack.Screen name="Student Attendance" component={StudentAttendance}/>
            <Stack.Screen name="Communication" component={Communication}/>
            <Stack.Screen name="Assignment" component={AssignmentStack} options={{
                headerShown:false
                }}
            />
            <Stack.Screen name="Reports" component={Reports}/>
            <Stack.Screen name="TimeTable" component={TimeTable} />
            <Stack.Screen name="Assessment" component={Assessment}/>
            <Stack.Screen name="Calendar" component={Calendar}/>
            <Stack.Screen name="Events & Holidays" component={EventsHolidays}/>
            <Stack.Screen name="News & Event Gallery" component={NewsEventGallery}/>
            <Stack.Screen name="Marks" component={Marks}/>
            <Stack.Screen name="Birthday List" component={BirthdayList}/>
            <Stack.Screen name="Student List" component={StudentList}/>
            <Stack.Screen name="Examination Marks" component={ExaminationMarks}/>
            <Stack.Screen name="About Us" component={AboutUs}/>
        </Stack.Navigator>
    );
}