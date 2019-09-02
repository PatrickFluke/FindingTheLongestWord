var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };

  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };

  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };

  this.setLastName = function(lastName) {
    firstAndLast = firstAndLast.split(" ")[0] + " " + lastName
    return firstAndLast;
  };

  this.setFirstName = function(firstName) {
    firstAndLast = firstName + " " + firstAndLast.split(" ")[1]
    return firstAndLast;
  };

  this.setFullName = function(firstAndLastName) {
    firstAndLast = firstAndLastName;
    return firstAndLast;
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');

bob.getFullName();
