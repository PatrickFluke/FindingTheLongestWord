// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  var removeSpaces = false;
  var url = [...title].map(letter => {
      removeSpaces = false;
      return letter.toLowerCase();
  });
  var eachLetter;
  var collectionOfSpaces = [];
  for (let a = 0; a < url.length; a++)
  {
    if (url[a] === " " && a == 0)
    {
      url[a] = "";
    }
    else if (url[a] === " " && (url[a-1] === " " | url[a+1] === " "))
    {
      url[a] = "";
    }
  }
  url = url.join("").split(" ").join("-");
  console.log(collectionOfSpaces);
  console.log(url);
  return url;
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
var winterCheck = urlSlug(" Winter Is   Coming") 
