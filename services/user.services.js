const { menuCodeConstant } = require("../constants/menuCode.constant");
const { getRecords } = require("./generic.services");

const getStudentDetails=()=>{
    return new Promise((resolve,reject)=>{
        let model={
            screenID:menuCodeConstant.USER_PROFILE,
        }
        getRecords(model).then(response=>{
            resolve(response.data[0]);
        }).catch(error=>{
            console.log("getStudentDetails error: ",error.response.data);
            reject(error);
        });
    });
}

const getTeacherDetails=()=>{
    return new Promise((resolve,reject)=>{
        let model={
            screenID:menuCodeConstant.USER_PROFILE,
        }
        getRecords(model).then(response=>{
            resolve(response.data[0]);
        }).catch(error=>{
            console.log("getTeacherDetails error: ",error.response.data);
            reject(error);  
        });
    });
}

module.exports={
    getStudentDetails,
    getTeacherDetails
}