import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const login=async(username,password)=>{
    const body={
        username,
        password,
        grant_type:'password'
    }
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(schoolDetail=>{
            axios.post(JSON.parse(schoolDetail).schoolendpoint+'Token',body,{
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }).then(async (response)=>{
                await AsyncStorage.setItem("loginDetails",JSON.stringify(response.data));
                resolve(response);
            }).catch(error=>{
                reject(error);
            })
        }).catch(error=>{
            reject("School Details not Found");
        })
    })
}

const logout=async()=>{
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(async (schoolDetail)=>{
            const schoolCode=JSON.parse(schoolDetail).schoolcode;
            await AsyncStorage.clear();
            await AsyncStorage.setItem("schoolcode",schoolCode);
            console.log('AsyncStorage cleared successfully.');
            resolve("Logout Successfully")
        }).catch(error=>{
            reject("School Details not Found");
        });
    })
}

module.exports ={
    login,
    logout
};