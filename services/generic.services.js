import AsyncStorage from "@react-native-async-storage/async-storage";
import headerServices from "./header.services";
import axios from "axios";

const getRecords=async(body)=>{
    const headers=await headerServices();
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(schoolDetail=>{
            axios.post(JSON.parse(schoolDetail).schoolendpoint+'api/Generic/GetRecords',body,{
                headers:{
                    'Authorization':headers.Authorization,
                    'ASGMapping_Id':headers.ASGMapping_Id,
                    'MenuId':headers.MenuId,
                    'CUserId':headers.CUserId,
                    'SgMapping_id':headers.SgMapping_id,
                    'StuStaffTypeId':headers.StuStaffTypeId,
                    'StuStaff_ID':headers.StuStaff_ID,
                }
            }).then(async (response)=>{
                resolve(response);
            }).catch(error=>{
                reject(error);
            })
        }).catch(error=>{
            reject("School Details not Found");
        })
    });
};

const getRecord=async(body)=>{
    const headers=await headerServices();
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(schoolDetail=>{
            axios.post(JSON.parse(schoolDetail).schoolendpoint+'api/Generic/GetRecords',body,{
                headers:{
                    'Authorization':headers.Authorization,
                    'ASGMapping_Id':headers.ASGMapping_Id,
                    'MenuId':headers.MenuId,
                    'CUserId':headers.CUserId,
                    'SgMapping_id':headers.SgMapping_id,
                    'StuStaffTypeId':headers.StuStaffTypeId,
                    'StuStaff_ID':headers.StuStaff_ID,
                }
            }).then(async (response)=>{
                resolve(response);
            }).catch(error=>{
                reject(error);
            })
        }).catch(error=>{
            reject("School Details not Found");
        })
    });
}

module.exports={
    getRecords,
    getRecord
}