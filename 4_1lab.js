//Lab

const minusOne = function (num) {
  console.log(num - 1);
};
minusOne(10); // 9
minusOne(100); // 99
minusOne(Infinity);

const makeSentence = function (a, b, c) {
  console.log(`Oh boy, do ${a} ${b} ${c} or what?`);
};
makeSentence("I", "want", "chimichangas");

const getLastElement = function (arr) {
  console.log(arr[arr.length - 1]);
};

getLastElement([1, 2, 3, 4, 5, 6]);
getLastElement(["a", "b", "c"]);
getLastElement([
  [1, 2, 3],
  [4, 5, 6],
]);

// question: why not arr[-1]?
