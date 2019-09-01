function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  arr = arr.map((x) => {
    isXArray(x);
  });

  return newArr;
  
  function isXArray(x) {
    if (Array.isArray(x))
    {
      x.map((a) => {
        isXArray(a);
      });
    }
    else
    {
      console.log("Adding: " + x)
      newArr.push(x);
    }
  }
  

}
steamrollArray([1, [2], [3, [[4]]]]);
