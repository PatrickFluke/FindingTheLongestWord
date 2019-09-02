function binaryAgent(str) {
  var arr = str.split(" ");
  console.log(arr);
  var newArr = [];
  console.log();
  for (let x=0; x < arr.length; x++)
  {
    newArr.push(String.fromCharCode(parseInt(arr[x], 2)));
  }
  return newArr.join("");
}
