/*
This is another one that I had working in that I could get the expected result, but FreeCodeCamp couldnt detect. 
I googled how to remove duplicates from an array, and came across the Set object type. This proves quite useful.
*/

function uniteUnique(arr) {
  var newArr = [];
  for (let i = 0; i < arguments.length; i++)
  {
    newArr.push(arguments[i]);
  }
  newArr = newArr.flat();
  let newSet = new Set(newArr);
  console.log([...newSet] + " is the whole array.");
  return [...newSet];
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

