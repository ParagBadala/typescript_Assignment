/// <reference path = "mobile.ts" />
/// <reference path = "basicPhone.ts" />
/// <reference path = "smartPhone.ts" />


var data =[
    {
        "mobileId":1000,
        "mobileName":"Samsung S9+",
        "mobileCost":72000,
        "mobileType":"Android"
    },
    {
        "mobileId":2000,
        "mobileName":"IPhoneX",
        "mobileCost":84000,
        "mobileType":"IOS"
    }
]

function PrintDetails(phone){
    phone. printMobileDetails();
}

var bObj = new Mobile.BasicPhoneDetails();
bObj.mobileId=data[1].mobileId;
bObj.mobileName=data[1].mobileName;
bObj.mobileCost=data[1].mobileCost;
bObj.mobileType=data[1].mobileType;
PrintDetails(bObj);

var sObj = new Mobile.SmartPhoneDetails();
sObj.mobileId=data[0].mobileId;
sObj.mobileName=data[0].mobileName;
sObj.mobileCost=data[0].mobileCost;
sObj.mobileType=data[0].mobileType;
PrintDetails(sObj);
