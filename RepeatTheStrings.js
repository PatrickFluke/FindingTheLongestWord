function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0)
  {
    str = ""
  }
  else{
    var tempStr = ""
    for (let i = 0; i < num; i++)
    {
      tempStr = tempStr + str;
    }
    str = tempStr;
  }
  return str;
}

repeatStringNumTimes("abc", 3);
