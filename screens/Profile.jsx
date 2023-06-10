import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserTypeConstant } from '../constants/userType.constant';

const Profile = () => {
  const [userType, setUserType] = useState('');
  const [profile, setProfile] = useState({});

  useEffect(() => {
    AsyncStorage.getItem('loginDetails').then((response) => {
      if (JSON.parse(response).StuStaffTypeId == UserTypeConstant.Student) {
        setUserType('Student');
      }
      if (JSON.parse(response).StuStaffTypeId == UserTypeConstant.Teacher) {
        setUserType('Teacher');
      }
    });
    AsyncStorage.getItem('Profile').then((response) => {
        setProfile(JSON.parse(response));
    })
  }, []);

  return (
    userType=='Student'?
    <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.sectionContainer, styles.imageContainer]}>
            <Image style={styles.profileImage} source={require('../assets/user1.jpg')} resizeMode='cover'/>
        </View>
        <View style={styles.sectionContainer}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardHeading}>{!profile.studentname ? 'student name':profile.studentname}</Text>
                    <Text>{!profile.contactmobileno ? 'mobile no': profile.contactmobileno}</Text> 
                    <Text>{!profile.dob ? 'dob':profile.dob}</Text>
                </View>
            </View>
        </View>
        <View style={[styles.sectionContainer, styles.detailsContainer]}>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Admission Number</Text>
                <Text>{!profile.admissionnumber ?'admission no':profile.admissionnumber}</Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Class Teacher</Text>
                <Text>{!profile.classteacher ? 'class teacher':profile.classteacher}</Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Class</Text>
                <Text>{profile.classname+", "+profile.sectionname}</Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Roll No.</Text>
                <Text></Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Blood Group</Text>
                <Text>{!profile.bloodgroup ? 'blood group':profile.bloodgroup}</Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Father's Name</Text>
                <Text>{profile.fathefirstname +(!profile.fatherlasttname ? "" :(" "+profile.fatherlasttname))}</Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Mother's Name</Text>
                <Text>{profile.motherfirstname+ (!profile.motherlasttname ? "" : (" "+profile.motherlasttname))}</Text>
            </View>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Address</Text>
                <Text>{(!profile.address1 ? "":profile.address1)+", "+(!profile.address2 ? "":profile.address2)}</Text>
            </View>
        </View>
        </ScrollView>
        : userType=='Teacher' ? 
        <ScrollView contentContainerStyle={styles.container}>
        <View style={[styles.sectionContainer, styles.imageContainer]}>
            <Image style={styles.profileImage} source={require('../assets/user1.jpg')} resizeMode='cover'/>
        </View>
        <View style={[styles.sectionContainer, styles.detailsContainer]}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardHeading}>{profile.firstname +(!profile.lastname ? "" : (" "+profile.lastname))}</Text>
                    <Text>{!profile.contactmobileno ? "mobile no" : profile.contactmobileno}</Text>
                    <Text>{!profile.email ? "email" : profile.email}</Text>
                </View>
            </View>
        </View>
        <View style={[styles.sectionContainer, styles.detailsContainer]}>
            <View style={styles.detailsItem}>
                <Text style={styles.heading}>Employee Code</Text>
                <Text>{!profile.empcode ? "emp code":profile.empcode}</Text>
            </View>
            <View style={styles.detailsItem}>
            <Text style={styles.heading}>Department</Text>
            <Text>{!profile.departmentname ? "department name" :profile.departmentname}</Text>
            </View>
            <View style={styles.detailsItem}>
            <Text style={styles.heading}>DOB</Text>
            <Text>{!profile.dob ? 'dob' :profile.dob}</Text>
            </View>
            <View style={styles.detailsItem}>
            <Text style={styles.heading}>Address</Text>
            <Text>{!profile.currentaddress? "address": profile.currentaddress}</Text>
            </View>
        </View>
        </ScrollView>
        :null
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:"#ffffff"
  },
  sectionContainer: {
    flex: 1,
    padddingVertical:20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaf4',
    borderBottomEndRadius:30,
    borderBottomStartRadius:30,
    height: 160,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#233698',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailsItem: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Profile;
