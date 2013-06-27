//alert("JavaScript works!");
var myString = "123-456-7890";
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
    return {
        "phoneNumCheck" : phoneNumCheck
    }
}
var newLib = new myLib();
console.log(newLib.phoneNumCheck(myString));
