//Only change code below this line. After an unfortunate week break from coding, this got knocked out easy.
function countdown(myArray, n){
  if (n <= 0) 
  {
    return myArray;
  }
  else{
    myArray.push(n);
    console.log(myArray);
    return countdown(myArray, n-1);
  }
}
countdown([], 5);
