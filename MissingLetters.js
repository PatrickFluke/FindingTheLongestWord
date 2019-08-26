function fearNotLetter(str) {
  var prevNum = 0;
  var found = false;
  var testString = "";
  var lowNum = 0;
  for (let i = 0; i < [...str].length || found == true;i++)
  {
    testString = str[i];
    if (i > 0)
    {
      if (testString.charCodeAt() !== prevNum + 1)
      {
        found = true;
        break;
      } 
    }
    prevNum = str[i].charCodeAt();
    console.log(prevNum);
  }
  if (prevNum < 122)
{
str = String.fromCharCode(prevNum + 1);
}
else{
  str = undefined;
}
  
  return str;
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz") + " is the final number.");
