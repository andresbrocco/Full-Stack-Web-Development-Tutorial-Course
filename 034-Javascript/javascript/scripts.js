
var name = "Jack";
var message = "Hello World! My name is "+name+" and I am "+age+" years old!"
var age = 23;
var sum = age + 13;
var mult = 3*4;
var div = 4/3;
// alert(message);
console.log("I can also write things here! \n"+message);
console.log("Note that the script does not continue until the alert is dismissed!");

var myAccountBalance = 500;
var carPrice = 600;
if (carPrice <= myAccountBalance) {
myAccountBalance -= carPrice;
  console.log("Congratulations, you bought a car! \n Your new Account Balance is: "+myAccountBalance);
} else {
  console.log("You don't have sufficient money =[");
}

// Operators: + - * / % < > == === !== <= >= ! && ||
// Difference between == and ===
// == checks if value is the same
// === checks if value and type are the same

var val1 = 23;
var val2 = "23";
if (val1 === val2) {
  console.log("Same value and type!");
} else if (val1 == val2) {
  console.log("Same value and different type!");
} else {
  console.log("Not the same value!");
}

// Conclusion: almost always use triple equal!

// Another thing: you don't need {} if you have only 1 line of code.

//

var arrayOfStrings = ["String1", "String2", "String3"];
var mixedArray = ["String", 5.5, true]; // NOT RECCOMENDED!
var emptyArray = [];

console.log("Full array: "+ arrayOfStrings)
console.log("Array element: "+ arrayOfStrings[0])

emptyArray.push(arrayOfStrings[1]) // push an element inside the array.

console.log("Not empty anymore: "+ emptyArray)

//Find the index of an element:

var index = arrayOfStrings.indexOf("String3")
console.log("index: "+index)

// Removing elements from a position in the array:
arrayOfStrings.splice(index, 1)
console.log("array with an element less: "+arrayOfStrings)

// Loop:

var total = 10;
for (var i = 0; i < total; i++) {
  console.log(i);
}

// Functions can acess external variables:
var c = 2;
function foo(a, b) {
  return a*b+c;
}
console.log("foo function: "+foo(3,6));

// Functions can be assigned to variables:
var transaction = function(priceOfSale){
  if(priceOfSale <= myAccountBalance){
    myAccountBalance -= priceOfSale;
    console.log("Purchase Sucessful");
  } else {
    console.log("Insufficient Funds");
  }
};

var printCustomerName = function(firstName, lastName){
  console.log("First name: "+firstName+" Last name: "+lastName);
};

var applyForCreditCard = function(creditScore, soul){
  // Process the credit application;
};

// THEN, those variables can be placed inside an array, as if it was an object:

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

bankOperations[transaction(10)]

// Objects:
var student = {
  firstName:"Joch",
  lastName:"Pranch",
  age: 102
};

var student1 = new Object();
student1.firstName = "Joch";
student1.lastName = "Pranch";
student1.age = 102;

var student2 = {};
student2.firstName = "Blah";
student2.lastName = "Looo";
student2.age = 8;

var students = [];
students.push(student1);
students.push(student2);

console.log(students);

// Everything in Javascript is an object. Even functions, so we can create a class using functions:

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.greeting = function() {
    return "Hi, I'm "+this.firstName + " and I'm " + this.age +" years old.";
  };
}

var s1 = new Student("Jenny", "Laga", 5);
students.push(s1);
students.push(new Student("Jenny2", "Laga2", 10))
console.log(students);

// Iterate objects:

for (var attribute in students[0]){
  console.log(attribute+": "+students[0][attribute])
}

// You can use bind() to change what "this" refers to.
