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

const performDataOperation=async(body)=>{
    const headers=await headerServices();
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(schoolDetail=>{
            axios.post(JSON.parse(schoolDetail).schoolendpoint+'api/Generic/PerformDataOperation',body,{
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

const uploadFile=async(body)=>{
    const headers=await headerServices();
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(schoolDetail=>{
            axios.post(JSON.parse(schoolDetail).schoolwebendpoint+'MobileReport/FileUploader',body,{
                headers:{
                    'Authorization':headers.Authorization,
                    'ASGMapping_Id':headers.ASGMapping_Id,
                    'MenuId':headers.MenuId,
                    'CUserId':headers.CUserId,
                    'SgMapping_id':headers.SgMapping_id,
                    'StuStaffTypeId':headers.StuStaffTypeId,
                    'StuStaff_ID':headers.StuStaff_ID,
                    'Content-Type':'multipart/form-data'
                }
            }).then(async (response)=>{
                console.log("uploadfile res:", response);
                resolve(response);
            }).catch(error=>{
                console.log(error);
                if(axios.isAxiosError(error)){
                    console.log("uploadfile err:", error.ErrorMessage);
                    console.log("uploadfile err:", error.StatusCode);
                }
                reject(error);
            })
        }).catch(error=>{
            reject("School Details not Found");
        })
    });
}

const deleteFile=async(body)=>{
    const headers=await headerServices();
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("schoolDetails").then(schoolDetail=>{
            axios.post(JSON.parse(schoolDetail).schoolwebendpoint+'MobileReport/DeleteFileUploaded?filePath='+body,{},{
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
    performDataOperation,
    getRecord,
    uploadFile,
    deleteFile,
}