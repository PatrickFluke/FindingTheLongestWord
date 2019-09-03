function convertToRoman(num) {
    var conversion = [{numeral: 'M', multiple: 1000}, {numeral: 'D', multiple: 500}, {numeral: 'C', multiple: 100}, {numeral: 'L', multiple: 50}, {numeral: 'X', multiple: 10}, {numeral: 'V', multiple: 5}, {numeral: 'I', multiple: 1}];
    var romanNumeral = "";
    for (let i=0; i < conversion.length; i++)
    {
        var multiples = Math.floor(num / conversion[i].multiple);
        num = num % conversion[i].multiple;
        if (multiples < 4)
        {
            for (let e = 0; e < multiples; e++)
            {
                romanNumeral = romanNumeral + conversion[i].numeral;
            }
        }
        else{
            console.log("Previous numeral: " + romanNumeral[romanNumeral.length - 1])
            if (romanNumeral[romanNumeral.length - 1] !== conversion[i-1].numeral)
            {
            
                romanNumeral = romanNumeral + conversion[i].numeral + conversion[i-1].numeral;
            }
            else
            {
                romanNumeral = romanNumeral.substring(0, romanNumeral.length - 1) + conversion[i].numeral + conversion[i-2].numeral;
            }
        }
        console.log(multiples)
        console.log(romanNumeral);
    }
 return romanNumeral;
}

console.log(convertToRoman(9));
