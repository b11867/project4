//alert("JavaScript works!");
var myString = "123-456-7890";
var hyphen = myString.indexOf("-");
var lastHyphen = myString.lastIndexOf("-");
var startPrefix = myString.indexOf("-")+1;
var startSuffix = lastHyphen +1;
var areaCode = myString.substring(0,hyphen);
var prefix = myString.substring(startPrefix,lastHyphen);
var suffix = myString.substring(startSuffix,myString.length);
var phoneCheck = areaCode + prefix + suffix;
/*
alert (areaCode);
alert(prefix);
alert(suffix);
*/
var phoneNumCheck = function(phoneNumber){
    var phoneCheck;
    if (areaCode.length == 3) {
        if (prefix.length == 3) {
            if (suffix.length == 4) {
                phoneCheck = true;
            } else {
        phoneCheck = false;
            }
            //code
        } else {
        phoneCheck = false;
        }
    } else {
        phoneCheck = false;
    } return phoneCheck;
}
var validPhone = phoneNumCheck(myString);
console.log(validPhone);