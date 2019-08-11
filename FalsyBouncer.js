function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  for (let i = 0; i < arr.length; i++)
  {
    //if (arr[i] is false | arr[i] === null | arr[i] === 0 |arr[i] === "" |arr[i] === undefined | arr[i] === NaN)
    if (Boolean(arr[i] === false) | arr[i] == "" | arr[i] == undefined | (isNaN(arr[i]) == true & ! arr[i] > 0)  | arr[i] === null)
    {
        console.log(arr[i] + " is " + Boolean(arr[i]));
        arr.splice(i,1);
        i--;
    } 
  }
  console.log(arr + " is the array.");
  return arr;
}
bouncer([7, "ate", "", false, 9])
