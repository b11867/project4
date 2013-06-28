//alert("JavaScript works!");
var myString = "123-456-7890";
var myEmail = "mgreenwaldt@fullsail.edu";
var myArray = [1,15,35,14,19,23];
var myNumber = 17;

var myLib = function(){
//phone number string function
    var phoneNumCheck = function(phoneNumber){
        var hyphen = phoneNumber.indexOf("-");
        var lastHyphen = phoneNumber.lastIndexOf("-");
        var areaCode = phoneNumber.substring(0,hyphen);
        var startPrefix = hyphen +1;
        var prefix = phoneNumber.substring(startPrefix,lastHyphen);
        var startSuffix = lastHyphen + 1;
        var suffix = phoneNumber.substring(startSuffix,phoneNumber.length);
        var phoneLength = areaCode + prefix + suffix;
        if (isNaN(phoneLength)) {
            return false;
        } else {
            if (areaCode.length == 3) {
               if (prefix.length == 3) {
                    if (suffix.length == 4) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
               }
            } else {
                return false;
            }
        }
    }
    // end function
    // email check function
    var emailCheck = function(emailAddress){
       var atSign = emailAddress.indexOf("@");
       var period = emailAddress.lastIndexOf(".");
       if (atSign < 1 || period < atSign + 3 || period + 3 >= emailAddress.length) {
        return false;
       } else {
        return true;
       }
    }
    
    
    //array function
    var nextNumber = function(array,number){
        array.sort();
        var nextNumber;
        for (i = 0; i< array.length; i ++) {
            nextNumber = array[i];
            if (nextNumber > number) {
                return nextNumber;
            }
           
        }
    }
    

    return {
    "phoneNumCheck" : phoneNumCheck,
    "emailCheck" : emailCheck,
    "nextNumber" : nextNumber
    }
}
var newLib = new myLib();
console.log(newLib.phoneNumCheck(myString));
console.log(newLib.emailCheck(myEmail));
console.log(newLib.nextNumber(myArray, myNumber));
