function truthCheck(collection, pre) {
  var test = false;
  for (let i = 0; i < collection.length; i++)
  {
    console.log("Object " + i + " has the property?: " + collection[i].hasOwnProperty(pre))
    console.log(collection[i][pre])
    if (collection[i].hasOwnProperty(pre) === false | collection[i][pre] === null | collection[i][pre] === 0 | collection[i][pre] === "" | collection[i][pre] === undefined | Number.isNaN(collection[i][pre]) === true)
    {
        return false;
    }
  }
  return true;
}
console.log(truthCheck(truthCheck([{"single": "double"}, {"single": NaN}], "single")));
