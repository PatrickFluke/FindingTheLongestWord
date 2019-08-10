function titleCase(str){
  str = str.toLowerCase();
  console.log(str);
  let upperCaseRegex = /\b[a-z]/g;
  str = str.replace(upperCaseRegex, function(match) {
    return match.toUpperCase();
  });
  let fixRegex = /'[A-Z]/;
  str = str.replace(fixRegex, function(match) {
    return match.toLowerCase();
   });
   console.log(str);
   return str;
}

titleCase("I'm a little tea pot.");
