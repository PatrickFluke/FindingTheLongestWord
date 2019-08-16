/* 
I was confused by how Map works, but this one lesson in FreeCodeCamp was amazing. 
*/

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < s.length; i++)
  {
    newArray.push(s[i]*2);
  } 
  console.log([...newArray]);
  // Add your code above this line
  console.log(newArray + ' is the array.');
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
