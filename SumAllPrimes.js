function sumPrimes(num) {
  let primes = [];
  for (let a = 1; a <= num; a++)
  {
    var test = true;
    if (Number.isInteger(a/2) === false & a > 2)
    {
      if (primes.length > 0)
      {
        for (var b = 1; b < primes.length; b++)
        {
          if (Number.isInteger(a/primes[b]) === true)
          {
            test = false
          }
        }
      }
      else{
        test = true;
      }
    }else if (a === 2){
      test = true;
    } else 
    {
      test = false;
    }
    
    if (test === true) 
    {
      primes.push(a);
    }
  }
  return primes.reduce((a,b)=>a+b);
}

sumPrimes(977);
