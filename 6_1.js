const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

/// every

function every1(arr) {
  let everyNum = arr.map((x) => x >= 0);
  if (everyNum) {
    console.log("True");
  } else {
    console.log("False");
  }
}

every1(nums);

function every2(arr) {
  let everyNum = arr.map((x) => x.length <= 8);
  if (everyNum) {
    console.log("True");
  } else {
    console.log("False");
  }
}

every2(panagram);

/// filter

const result1 = nums.filter((x) => x < 4);
console.log(result1);

const result2 = panagram.filter((word) => word.length % 2 === 0);
console.log(result2);

/// find

const found1 = nums.find((element) => element % 5 === 0);
console.log(found1);

const found2 = panagram.find((element) => element.length > 5);
if (found2) {
  console.log(found2);
} else {
  console.log("no word is longer than 5");
}

/// find index

const num1 = (element) => element % 3 === 0;
console.log(nums.findIndex(num1));

const word1 = (element) => element.length < 2;
console.log(panagram.findIndex(word1));

// for each

const map1 = nums.map((x) => x * 3);
console.log(map1);

let aArr = [];
panagram.map((a) => {
  if (a[a.length - 1] === "!") {
    aArr.push(a);
  }
});
if (aArr.length > 0) {
  console.log(aArr);
} else {
  console.log("no such a word");
}

/// map

const map2 = nums.map((x) => x * 100);
console.log(map2);

const map3 = panagram.map((x) => x.toUpperCase());
console.log(map3);

/// some

const result3 = nums.filter((x) => x % 7 === 0);
console.log(result3);

const result4 = panagram.filter((word) => word.includes("a"));
console.log(result4);
