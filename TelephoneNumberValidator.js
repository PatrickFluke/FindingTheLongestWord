function telephoneCheck(str) {
  // Good luck!
  let regexPhoneNumberTypes = [
    /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/m,
    /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/m,
    /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/m,
    /^[0-9]{3} [0-9]{3} [0-9]{4}$/m,
    /^[0-9]{10}$/m,
    /^1 [0-9]{3} [0-9]{3} [0-9]{4}$/m,
    /^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/m,
    /^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/m,
    /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/m

  ];
  var test = false;
  for (let i = 0; i < regexPhoneNumberTypes.length; i++)
  {
    console.log("test");
    if (regexPhoneNumberTypes[i].test(str) === true)
    {
      console.log("works");
      test = true;
      break;
    }
  }
  return test;
}
