function findElement(arr, func) {
  let num;
  console.log(arr.length);
  for (let i = 0; i<arr.length; i++)
  {
    if (func(arr[i]) === true)
    {
      console.log(arr[i] + " becomes " + func(arr[i]));
      num = arr[i];
      i =arr.length;
    }
  }
  console.log(num + " is the num");
  return num;
}

findElement([1, 2, 3, 8], num => num % 2 === 0);
