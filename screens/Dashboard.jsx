import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect,useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { UserTypeConstant } from '../constants/userType.constant';
import { sOptions, tOptions } from '../constants/dashboardOptions.constant';

const Dashboard = ({navigation}) => {
  const handlePress = (name) => () => {
    navigation.navigate(name);
  };
  const [options,setOptions]=useState([]);
  const [name,setName]=useState("");
  const [subtitle,setsubtitle]=useState("");

  useEffect(()=>{
    AsyncStorage.getItem('loginDetails').then((response)=>{
      if(JSON.parse(response).StuStaffTypeId==UserTypeConstant.Student){
        setOptions(sOptions);
        AsyncStorage.getItem('Profile').then((response)=>{
          setName(JSON.parse(response).studentname);
          setsubtitle(JSON.parse(response).classname+" "+JSON.parse(response).sectionname);
        })
      }
      if(JSON.parse(response).StuStaffTypeId==UserTypeConstant.Teacher){
        setOptions(tOptions);
        AsyncStorage.getItem('Profile').then((response)=>{
          setName(JSON.parse(response).firstname+" "+JSON.parse(response).lastname);
          setsubtitle(JSON.parse(response).departmentname);
        })
      }
    })
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.class}>{subtitle}</Text>
        </View>
        <Image
          source={require('../assets/user1.jpg')}
          alt='Profile Picture'
          style={styles.profilePicture}
          resizeMode="cover"
        />
      </View>
      <ScrollView contentContainerStyle={styles.optionsSection}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={handlePress(option.name)}
          >
            <Image source={option.image} style={styles.optionImage} />
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 60,
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#eaeaf4',
  },
  profileInfo: {
    // marginRight: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"#222222"
  },
  class: {
    fontSize: 16,
    color: '#222222',
    fontWeight: 'normal',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 7,
    borderColor: '#233698',
  },
  optionsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
    padding: 20,
  },
  option: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 30,
  },
  optionImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  optionText: {
    textAlign: 'center',
  },
});

export default Dashboard;
