function palindrome(str) {
  // Good luck!
  str = str.replace(/\W/gi,"");
  str = str.replace(/[A-Z]/g, function(x) {
    return x.toLowerCase();
  });
  str = str.replace(/_/g, "");
  var test = true;
  console.log(str);
  console.log(str.split(""));
  for (let i = 0; i < str.length; i++)
  {
    console.log(str[i] + " and " + (str[str.length - i - 1] + " equal? "))
    if (test === true & str[i] !== str[str.length-i-1])
    {
      console.log("NO!");
      test = false
    }
  }
  return test;
}
palindrome("_eye");
