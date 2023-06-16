import AsyncStorage from "@react-native-async-storage/async-storage";
import { screenIDConstant } from "../constants/screenID.constant";
import { getRecords } from "./generic.services";

const getCommType=async()=>{
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("loginDetails").then((value)=>{
            const model={
                aSGMapping_Id:Number(JSON.parse(value).ASGMapping_Id),
                sgMapping_id:Number(JSON.parse(value).SgMapping_id),
                screenID:screenIDConstant.COMM_TYPE_FOR_MOBILE
            };
            getRecords(model).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error.response.data);
            })
        }).catch((error)=>{
            reject(error);
        });
    })
}

const getCommunication=async()=>{
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("loginDetails").then((value)=>{
            const model={
                aSGMapping_Id:  Number(JSON.parse(value).ASGMapping_Id), 
                sgMapping_id: Number(JSON.parse(value).SgMapping_id),
                screenID:screenIDConstant.COMM_DETAILS
            }
            getRecords(model).then((response)=>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error.response.data);
            })
        }).catch((error)=>{
            reject(error);
        });
    });
}

const getCommunicationDetail=async(id)=>{
    return new Promise((resolve,reject)=>{
        AsyncStorage.getItem("loginDetails").then((value)=>{
            const model={
                aSGMapping_Id:  Number(JSON.parse(value).ASGMapping_Id), 
                sgMapping_id: Number(JSON.parse(value).SgMapping_id),
                screenID:screenIDConstant.COMM_DETAIL_BYID,
                indexScreenSearchParameterModel:[{
                    searchParameter: "commToSend_Id",
                    searchParameterDataType: "int",
                    searchParameterValue: id
                }]
            }
            getRecords(model).then((response)=>{
                resolve(response.data[0]);
            }).catch((error)=>{
                reject(error.response.data);
            })
        }).catch((error)=>{
            reject(error);
        });
    });
}

module.exports={
    getCommType,
    getCommunication,
    getCommunicationDetail
}