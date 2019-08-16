/* 
I was confused by how Map works, but this one lesson in FreeCodeCamp was amazing. 
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype
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
  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
