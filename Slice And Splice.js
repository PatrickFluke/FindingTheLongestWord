function frankenSpliceModified(arr1, arr2, n) {
  // This is how I originally solved it, but FreeCodeCamp couldnt manage to match it to their results... :(
  for (let i=0; i < arr1.length; i++)
  {
    arr2.splice(n+i,0,arr1.slice(i,i+1));
    console.log("Array 1: " + arr1 + "   Array 2: " + arr2 + "   Removed: " + arr1.slice(i,i+1) + "   i: " + i);
  }
  return arr2;
}

