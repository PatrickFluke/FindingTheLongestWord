function dropElements(arr, func) {
  // Drop them elements.
  var test = false;
  var newArr = [];
  arr.map((x) => {
    console.log("Testing " + x)
    if (test === false)
    {
      if (func(x) === true)
      {
        console.log("True")
        test = true;
        newArr.push(x);
        console.log("Arr: " + arr);
        console.log("NewArr: " + newArr);
      }
    }
    else
    {
      newArr.push(x);
    }
  });
  console.log("New: " + newArr);
  return newArr;
}
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1; }));
