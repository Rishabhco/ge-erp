import AsyncStorage from "@react-native-async-storage/async-storage";
import { defaultAuthDetail } from "../constants/global.constant";

const headerServices =()=>{
    return new Promise((resolve,reject)=>{
        let header={};
        AsyncStorage.getItem('loginDetails').then((value) => {
            header.Authorization=JSON.parse(value).access_token;
            header.ASGMapping_Id=JSON.parse(value).ASGMapping_Id;
            header.MenuId=defaultAuthDetail.MenuID;
            header.CUserId=JSON.parse(value).CUserId;
            header.SgMapping_id=JSON.parse(value).SgMapping_id;
            header.StuStaffTypeId=JSON.parse(value).StuStaffTypeId;
            header.StuStaff_ID=JSON.parse(value).StuStaff_ID;
            resolve(header);
        }).catch((error) => {
            reject(error);
            console.log(error);
        });
    });
}

export default headerServices;