function addTogether() {

  var test = true;
  for (let i = 0; i < arguments.length; i++)
  {
    console.log(arguments[i] + " test for number status")
    console.log(typeof arguments[i])
    if (((arguments[i]).isArray | isNaN(arguments[i]) === true | typeof arguments[i] === 'string') && test === true)
    {
      console.log(arguments[i] + " is not a number.");
      test = false;
      return undefined;
    }
  }
  console.log(test);
  if (test === true)
  {
    var x = arguments[0];
    console.log("Got in anyways?");
    if (Array.isArray(arguments[0]))
    {
      console.log("Is an array, adding.");
      return arguments[0][0] + arguments[0][1];
    }
    else if (arguments.length === 1)
    {
      console.log("Only one argument provided, obtaining second.")
      console.log(arguments[0]);
      return b;
    }
    else if (arguments.length === 2)
    {
      return arguments[0] + arguments[1];
    }
    function b() {
      var y = arguments[0];
      console.log(y + "is y");
      console.log(isNaN(y));
      if (isNaN(y) === true | Array.isArray(y))
      {
        console.log("is array");
        return undefined;
      }
      return y + x;
    }
  }
  return undefined;
}
