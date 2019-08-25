/* 
Lines 12 through 35 are my function. It returns the right string. Output is:

  A,T,T,A,C,G,G,C,A,T is myPairElement.
  A,T,T,A,C,G,G,C,A,T is the suggested pairElement
  Are the two equal strings? 
  true
 
It may not be the most efficient means of solving the problem, but it did.
*/

function myPairElement(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++)
  {
    var tempArray = [];
    if (str[i].toUpperCase() == "G")
    {
      arr.push(["G", "C"]);
    }
    else if (str[i].toUpperCase() == "C")
    {
      arr.push(["C", "G"]);
    }
    else if (str[i].toUpperCase() == "A")
    {
      arr.push(["A", "T"]);
    }
    else if (str[i].toUpperCase() == "T")
    {
      arr.push(["T", "A"]);
    }
  }
  return arr;
}

    function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }
    function pairElement(str) {
      // Return each strand as an array of two elements, the original and the pair.
      var paired = [];

      // Function to check with strand to pair.
      var search = function(char) {
        switch (char) {
          case 'A':
            paired.push(['A', 'T']);
            break;
          case 'T':
            paired.push(['T', 'A']);
            break;
          case 'C':
            paired.push(['C', 'G']);
            break;
          case 'G':
            paired.push(['G', 'C']);
            break;
        }
      };

      // Loops through the input and pair.
      for (var i = 0; i < str.length; i++) {
        search(str[i]);
      }

      return paired;
    }

console.log(myPairElement("ATCGA") + " is myPairElement.");
console.log(pairElement("ATCGA") + " is the suggested pairElement");
console.log("Are the two equal strings? ");
console.log( String(myPairElement("ATCGA"))  === String(pairElement("ATCGA")));
