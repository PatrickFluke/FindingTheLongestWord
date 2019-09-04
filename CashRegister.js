function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  let currency = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.0,
    "FIVE": 5.0,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  if (change < 0)
  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }


  //Determine total in cash register;
  var totalCashOnHand = 0;
  for (let i = 0; i < cid.length; i++)
  {
    totalCashOnHand = totalCashOnHand + cid[i][1];
  }
  totalCashOnHand = totalCashOnHand.toFixed(2);
  console.log(totalCashOnHand);

  if (totalCashOnHand == change)
  { 
    return {status: "CLOSED", change: cid};
  }
  // Here is your change, ma'am.
  var statusOfPurchase = "OPEN";
  var changeRequired = [];
  for (let e = cid.length - 1; e >= 0; e--)
  {
    var curRequired = 0
    console.log(currency[cid[e][0]]);
    if (change / currency[cid[e][0]] > 1)
    {
      curRequired = Math.floor(change / currency[cid[e][0]]);
      if (curRequired*currency[cid[e][0]] > cid[e][1])
      {
        curRequired = cid[e][1] / currency[cid[e][0]];
        change = change - cid[e][1];
        change = change.toFixed(2);
        console.log(change + " left to refund.");
      }
      else{
        change = change % currency[cid[e][0]];
        change = change.toFixed(2)
        console.log(change + " left to refund.");
      }
      changeRequired.push([cid[e][0], curRequired*currency[cid[e][0]]])
    }
  }
  if (change > 0)
  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  return {status: statusOfPurchase, change: changeRequired};
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]).change)
