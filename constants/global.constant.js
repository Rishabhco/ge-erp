import { menuCodeConstant } from "./menuCode.constant";
import { menuIDConstant } from "./menuID.constant";

export const defaultAuthDetail={
    IsLoggedIn: false, 
    access_token: '',
    ASGMapping_Id: '3',
    CUserId: '1',
    SgMapping_id: '2',
    StuStaff_ID: '',
    StuStaffTypeId: '39',
    MenuCode: menuCodeConstant.MobileGeneric,
    MenuID: menuIDConstant.MobileGeneric.toString(), 
    Lang: "en", 
    UserID: "1",
    GroupID: "1",
    UserGroupID: "3"
}