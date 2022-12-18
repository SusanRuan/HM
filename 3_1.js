// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.

const maxOfThree = function (x, y, z) {
  if (x > y && x > z) console.log(x + " is the largest");
  else if (z > x && z > y) console.log(z + " is the largest");
  else console.log(y + " is the largest");
};

maxOfThree(5, 10, 15);

// 3.

function isCharAVowel(x) {
  let arr = ["a", "e", "i", "o", "u"];
  if (arr.includes(x.toLowerCase())) {
    console.log("true");
  } else {
    console.log("flase");
  }
}
isCharAVowel("A");

// 4.

function sumArray(...numbers) {
  let sum = 0;
  for (let x in numbers) {
    sum += numbers[x];
  }
  return sum;
}
console.log(sumArray(2, 4, 5));

// 5.
function multiplyArray(...numbers) {
  let sum = 1;
  for (let x in numbers) {
    sum *= numbers[x];
  }
  return sum;
}
console.log(multiplyArray(2, 4, 5));

// 6.

function numArgs(...arg) {
  return arg.length;
}

console.log(numArgs("foo", "new", 3, 9));

// 7.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("rockstar"));

// 8.

function longestStringInArray(...x) {
  return Math.max(...x.map((el) => el.length));
}
console.log(longestStringInArray("great", "happy new year", "moring"));

// 9.

function stringsLongerThan(arr, n) {
  let arr1 = [];
  arr.forEach((e) => {
    if (e.length > n) {
      arr1.push(e);
    }
  });
  console.log(arr1);
}
stringsLongerThan(["say", "hello", "in", "the", "morning"], 3);
