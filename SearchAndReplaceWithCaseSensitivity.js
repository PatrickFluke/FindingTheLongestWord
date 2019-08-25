function myReplace(str, before, after) {
  let flags = "gi"
  var str2 = "";
  var afterMod = after;
  let firstSearchRegex = new RegExp(before, "gi") ;
  str2 = firstSearchRegex.exec(str);
  console.log(str2);
  console.log(str2[0][0]);

    if (str2[0][0] == str2[0][0].toUpperCase())
    {
      console.log(after + " trying to change.");
      afterMod = [...after]
      afterMod[0] = afterMod[0].toUpperCase();
      after = afterMod.join("");
      console.log(after + " has been changed.");
    }
  str = str.replace(firstSearchRegex, after);
  return str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
