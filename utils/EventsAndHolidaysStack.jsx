import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EventsHolidays from '../screens/EventsHolidays';
import { useEffect ,useState} from 'react';
import { SysMaster,UserTypeIdConstant } from '../constants/global.constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getEmpHolidayList, getStuHolidayList } from '../services/eventHolidays.services';

const Tab = createMaterialTopTabNavigator();

function EventsAndHolidaysStack() {

  const [holidaysData, setHolidaysData] = useState([]);
  const [eventsData, setEventsData] = useState([]);


  useEffect(() => {
    AsyncStorage.getItem('loginDetails').then((res)=>{
      const data = JSON.parse(res);
      if(Number.parseInt(data.StuStaffTypeId)== UserTypeIdConstant.Student){
        getStuHolidayList().then((res)=>{
          setHolidaysData(res.filter((x) => x.calendartype_id === SysMaster.Holiday));
          setEventsData(res.filter((x) => x.calendartype_id === SysMaster.Event));
        }).catch((err)=>{
          console.log(err);
        });
      }
      if(Number.parseInt(data.StuStaffTypeId)== UserTypeIdConstant.Teacher){
        getEmpHolidayList().then((res)=>{
          setHolidaysData(res.filter((x) => x.calendartype_id === SysMaster.Holiday));
          setEventsData(res.filter((x) => x.calendartype_id === SysMaster.Event));
        }).catch((err)=>{
          console.log(err);
        });
      }
    })
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Holidays">{() => <EventsHolidays data={holidaysData} />}</Tab.Screen>
      <Tab.Screen name="Events" >{() => <EventsHolidays data={eventsData} />}</Tab.Screen>
    </Tab.Navigator>
  );
}

export default EventsAndHolidaysStack;