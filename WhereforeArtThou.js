function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let i = 0; i < collection.length; i++)
  {
    arr.push(collection[i])
  }

  console.log(arr.length + " done at this point.");

  Object.keys(source).forEach ((key) => {
    console.log(key);
    arr = arr.filter((objScan => {
      return objScan.hasOwnProperty(key) && objScan[key] === source[key];
    }));
  });
  console.log(arr.length + " were not filtered out.");
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
