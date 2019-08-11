function mutation(arr) {
  let arr1 = [...arr[0].toLowerCase()];
  let arr2 = [...arr[1].toLowerCase()];
  var test = true;
  for (let i = 0; i < arr2.length; i++)
  {
    var test2 = false;
    for (let e = 0; e < arr1.length; e++)
    {
      if (arr1[e] == arr2[i])
      {
        test2 = true;
        console.log("Found: " + arr2[i])
      }
    }
    if (test2 == false)
    {
      test = false;
    }
  }
  console.log(test);
  return test;
}

mutation(["hello", "hey"]);
