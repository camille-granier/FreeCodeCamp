function palindrome(str) {
  //Remove non word characters and pass to lowercase
  var regEx = /[\W-_]/g;
  var newStr = str.replace(regEx, "").toLowerCase();

  // Split the string in half depending if its even or odd
  var str1 = "";
  var str2 = "";
  var middle = Math.floor((newStr.length)/2);
  var length = newStr.length;
  if (length % 2 !== 0) {
    str1 = newStr.substring(0, middle);
    str2 = newStr.substring(middle + 1, length);
  } else {
    str1 = newStr.substring(0, middle);
    str2 = newStr.substring(middle, length);
  }

  // Transform into arrays, reversing the 2nd one for comparison
    var arr1 = str1.split("");
    var arr2 = str2.split("").reverse();
  
  return arr1.toString() === arr2.toString();
}


palindrome("1 eye for of 1 eye.");
