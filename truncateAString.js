function truncateString(str, num) {
  if (str.length > num)
  {
    var strArray = [...str];
    str = "";
    for (let i= 0; i < num; i++)
    {
      str = str + strArray[i];
    }
    str = str + "...";
  }
  // Clear out that junk in your trunk
  console.log(str)
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
