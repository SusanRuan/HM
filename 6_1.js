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

nums.map((x) => {
  if (x < 4) console.log(x);
});

panagram.map((y) => {
  if (y.length % 2 === 0) console.log(y);
});

/// find
let y = [];
nums.map((x) => {
  if (x % 5 === 0) {
    y.push(x);
  }
});

if (y.length > 0) {
  console.log(y[0]);
} else {
  console.log("no number");
}

let z = [];
panagram.map((x) => {
  if (x.length > 5) {
    z.push(x);
  }
});
if (z.length > 0) {
  console.log(z[0]);
} else {
  console.log("no word");
}

/// fin index

let yIndex = [];
nums.map((x, i) => {
  if (x % 3 === 0) {
    yIndex.push(i);
  }
});

if (yIndex.length > 0) {
  console.log(yIndex[0]);
} else {
  console.log("no number index");
}

let zIndex = [];
panagram.map((x, i) => {
  if (x.length < 2) {
    zIndex.push(i);
  }
});
if (zIndex.length > 0) {
  console.log(zIndex[0]);
} else {
  console.log("no word index");
}

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

let q = [];
nums.map((x) => {
  if (x % 7 === 0) {
    q.push(x);
  }
});

if (q.length > 0) {
  console.log(q);
} else {
  console.log("no number canbe divided by 7");
}

let p = [];
panagram.map((x) => {
  if (x.includes("a")) {
    p.push(x);
  }
});
if (p.length > 0) {
  console.log(p);
} else {
  console.log("no word contains letter a");
}
