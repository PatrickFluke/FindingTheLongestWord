function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var pos = -1;
  arr.sort(function(a, b){return a-b});
  console.log(arr);
  for (let i = 0; i < arr.length; i++)
  {
    if (num <= arr[i])
    {
      pos = i;
      i = arr.length
    }
  }
  if (pos < 0)
  {
    pos = arr.length ;
  }
  console.log(pos);
  return pos;
}
getIndexToIns([5, 3, 20, 3], 5);
