//alert("JavaScript works!");
var myString = "123-456-7890";
var hyphen = myString.indexOf("-");
var lastHyphen = myString.lastIndexOf("-");
var startPrefix = myString.indexOf("-")+1;
var startSuffix = lastHyphen +1;
var areaCode = myString.substring(0,hyphen);
var prefix = myString.substring(startPrefix,lastHyphen);
var suffix = myString.substring(startSuffix,myString.length);
var phoneCheck = areaCode, prefix, suffix;
/*alert (areaCode);
alert(prefix);
alert(suffix);
*/
var phoneNumCheck = function(phoneNumber){
    //code goes here
    if (phoneNumber == phoneCheck) {
        console.log("The number you entered is valid.");
    } else {
        console.log("The number you entered is not valid.");
    }
}
phoneNumCheck(myString);