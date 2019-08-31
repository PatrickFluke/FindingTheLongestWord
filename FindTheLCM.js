/*
Guys, I fought for this one. I know it's messy, but the key point to remember is that I figured out how it worked. 
Early in my research of the Euclidean algorithm I found the actual code needed to do this. I saw it, I knew if I just
wrote that I'd be done, but while I knew how to do it, I wanted to understand how to do it. I'm proud of this no matter how
garbagy it looks. Troubleshooting comments left in and all. That is all! :)

*/


function smallestCommons(arr) {
  arr = arr.sort((a,b) => a<b)
  var lcm = arr[0];
  console.log(arr);
  for (let i= arr[0]; i > arr[1];i--)
  {
    console.log("///NEXT///")
    var highNum = lcm;
    var remainder = i-1;
    var hcd = 1;
    var Product = lcm * remainder;
    console.log("Product " + Product);
    console.log("Compare: " + highNum + " and " + remainder + ".")
    for (let j = 0; j < 10;j++)
    {
      console.log("Run");
      if (highNum % remainder === 0)
      {
        console.log("Remainder is 0, numbers are: " + highNum + " " + remainder)
        hcd = highNum / remainder;
        console.log("HCD: " + hcd);
        
      }
      else{
        let newHigh = remainder;
        remainder = highNum % remainder;
        highNum = newHigh;
        console.log("Resultant Numbers: " + highNum + " " +remainder);
      } 
    }
    console.log("LCM: " + lcm)
    lcm = Product/remainder;
  }
  //From here out I need to calculate the GCD of each of the multiples

  return lcm;
}
console.log("LCM: " + smallestCommons([1,5]));
 
