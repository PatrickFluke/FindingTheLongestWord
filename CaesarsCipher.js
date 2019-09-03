function rot13(str) { // LBH QVQ VG!
  console.log("A".charCodeAt(0));
  console.log("Z".charCodeAt(0)); // I didnt know what the codes were and I didnt feel like googling.

  str = str.replace(/[A-Z]/g, function(x) {
    var newChar = x.charCodeAt(0);
    newChar = newChar - 13;
    if (newChar < 65)
    {
      newChar = newChar + (90-64);
    }
    return String.fromCharCode(newChar);
  });

  return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
