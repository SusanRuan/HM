/* 


A. Q + A

1. use the assignment ( = ) operator
2. declare variables with let, then use the assignment ( = ) operator asign a new value
3. after a value is assigned to a variable using the assignment operator, you can assign the value of that variable to another variable using the assignment operator. 
4. use let const to declare variables,use ssignment ( = ) operator to assign values to variables, define functions?
5. Pseudocode refers to code-like syntax that is generally used to indicate to humans how some code syntax works, or illustrate the design of an item of code architecture.
6.It depends on the problem but normally I would say on average 50% of coding and 50% of ‘analysis’, ‘design’, ‘testing’, including going back and forth between coding. 

*/

// B. Strings

let firstVariable = "Hello World";
firstVariable = 5;

let secondVariable = firstVariable;
secondVariable = "great";
console.log(firstVariable);
// 6. the value of firstVariable is 5

let yourName = "susan";
console.log(`Hello, my name is ${yourName}`);

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a !== b);
console.log(c !== d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log((a !== b) !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log((a === a) !== d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// D. The farm

let animal = "cow";

if (animal === "cow") {
  console.log("mooooo");
} else {
  console.log("Hey! You're not a cow.");
}

// 4. Commit?

// E. Driver's Ed

let age = 10;

if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

// II. Loops
// A. The basics

for (let i = 1; i < 11; i++) {
  console.log(i);
}

for (let i = 10; i < 401; i++) {
  console.log(i);
}

let everyThirdArr = [];

for (let i = 0; i < 4001; i += 3) {
  everyThirdArr.push(i);
}
console.log(everyThirdArr);
let newArr = [];

everyThirdArr.forEach((e) => {
  let b = e.toString();
  if (b.startsWith("12")) {
    newArr.push(Number(b));
  }
});
console.log(newArr);

// B. Get even

for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(`${i} <-- is an even number`);
  }
}

// C. Give me Five

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`I found a ${i}. High five & Three is a crowd`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  }
}

// D. Savings account

function sum() {
  let bank_account = 0;
  for (let i = 1; i < 11; i++) {
    bank_account += i;
  }
  return bank_account;
}
console.log(sum());

function sumBonus() {
  let bank_account = 0;
  for (let i = 1; i < 101; i++) {
    bank_account += i;
  }
  return bank_account * 2;
}
console.log(sumBonus());

// III. Arrays & Control flow

/*

A. Talk about it:
1. its called elements.
2. No
3. the contacts on our phone

*/

// B. Easy Does It

const quotes = ["", "", ""];

// C. Accessing elements

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();

console.log(myArray);

// F. Biggie Smalls

let x = 100;

if (x < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

// G. Monkey in the Middle

let y = 8;

if (y < 5) {
  console.log("little number");
} else if (y > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
kristynsCloset[5] = "raybans";
kristynsCloset["yellow knit hat"] = "stained knit hat";
console.log();
console.log(thomsCloset[1][0]);
console.log(
  "Thom is looking fierce in a" +
    thomsCloset[0][0] +
    "," +
    thomsCloset[1][1] +
    " and" +
    thomsCloset[2][1]
);
thomsCloset[1][2] = "thomsCloset[0][0]";

// IV. Functions

// B. printCool

function printCool(arg) {
  return `${arg} is cool`;
}
console.log(printCool("Captain Reynolds"));

// C. calculateCube

function calculateCube(arg) {
  return arg * arg * arg;
}

console.log(calculateCube(5));

// D. isVowel
function isVowel(arg) {
  let arr = ["a", "e", "i", "o", "u"];
  let argLower = arg.toLowerCase();
  if (arr.includes(argLower)) {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel("a"));

function getTwoLengths(str1, str2) {
  return [str1.length, str2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths

function getMultipleLengths(arr) {
  let newArr = [];
  arr.forEach((e) => newArr.push(e.length));
  return newArr;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree

function maxOfThree(n1, n2, n3) {
  if (n3 > n2 && n1 >= n3) {
    return n1;
  } else if (n2 >= n1 && n2 >= n3) {
    return n2;
  } else {
    return n3;
  }
}
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord

function printLongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

// Objects
// A. Make a user object

let user = { name: "max", email: "max@gmail.com", age: 30, purchased: [] };

// B. Update the user

user.email = "newmax@gmail.com";
user.age++;
console.log(user.age);

// C. Adding keys and values

user.location = "new york city";
console.log(user);

// D. Shopaholic!

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

// E. Object-within-object

user.friend = {
  name: "Judy",
  age: 35,
  location: "new jersey",
  purchased: [],
};
console.log(user.friend.name);
console.log(user.friend.location);

user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

// F. Loops

user.purchased.forEach((element) => console.log(element));

const arr = user.friend.purchased;
console.log(arr);
arr.forEach((element) => console.log(element));

// G. Functions can operate on objects

// function updateUser() {
//   user.age += 1;
//   user.name.toUpperCase();
// }

// console.log(user);

function oldAndLoud(person) {
  console.log(person.age, person.name);
  person.age += 1;
  person.name = person.name.toUpperCase();
  console.log(person);

  // return person;
}

oldAndLoud(user);
