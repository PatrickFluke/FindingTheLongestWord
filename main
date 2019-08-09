function findLongestWordLength(str) {
  var length = str.length;
  let words = [];
  var i = 0;
  var a = 0;
  var curWord = "";
  for (i;i<length;i++)
  {  
    if (str[i] == " ")
    {
      words[a] = curWord;
      curWord = "";
      a = a + 1;
    }
    else
    {
      curWord = curWord + str[i];
    }
  }
  words[a] = curWord;
  i=0;
  a=0;
  for (i;i < words.length;i++)
  {
    if (words[a].length < words[i].length)
    {
      console.log(words[a])
      a = i;
    }
  }
  return words[a].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
