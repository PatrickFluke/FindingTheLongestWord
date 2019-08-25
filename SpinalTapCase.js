//Guaranteed there is a cleaner way to do this. But I did it!

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let addSpacesRegex = /[A-Z]/g;
  str = str.replace(addSpacesRegex, letter => {
    return " " + letter;
  });
  console.log(str);
  let removeUSRegex = /_/gi
  str = str.replace(removeUSRegex, letter => {
    return " ";
  });

  let reduceSpacesRegex = /\s+/gi
  str = str.replace(reduceSpacesRegex, letter => {
    return " ";
  });
  console.log(str);

  let removeSpaceAtBeginning = /\s*/
  str = str.replace(removeSpaceAtBeginning, "");

  let lowerCaseRegex = /\w/gi
  str = str.replace(lowerCaseRegex, letter => {
    return letter.toLowerCase();
  })

  str = str.replace(/\s/gi,"-");
  console.log(str);
  return str;
}

spinalCase("The_Andy_Griffith_Show")
