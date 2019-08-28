function sumFibs(num) {
  var total = 0;
  let arr = [1,1];
  var i = 2;
  var a = 0;
  while (a <= num)
  {
    arr.push(arr[i-1] + arr[i-2]);
    a = arr[i];
    i++
  }
  arr.pop();
  arr.map((x) => {
    if (x % 2 > 0)
    {
      console.log(x + " is odd.")
      total = total + x;
    }
  });
  return total;
}
console.log(sumFibs(10) + " is the sum of the array.");
