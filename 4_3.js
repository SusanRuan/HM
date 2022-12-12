// Easy Going

for (let i = 1; i < 21; i++) {
  console.log(i);
}

// Get Even

for (let i = 0; i < 201; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Fizz Buzz

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}

// Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2] = 5001;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.shift();
wolfy.unshift("Gameboy");
// console.log(wolfy);
// console.log(plantee);
// console.log(dart);

// Yell at the Ninja Turtles
const arr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let el of arr) {
  el = el.toUpperCase();
  console.log(el);
}

// Methods, Revisited

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(favMovies.indexOf("Titanic"));

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. Did it permanently alter it?Yes.

favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
// add one or more elements to the beginning of the given array.
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(14, 0, "Avatar");
//did this permanently alter our array? Yes
console.log(favMovies.length);
console.log(Math.floor(favMovies.length / 2));
let lastHalf = favMovies.slice(
  Math.ceil(favMovies.length / 2),
  favMovies.length
);
console.log(lastHalf);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));

// The keyword const is a little misleading. It does NOT define a constant array. It defines a constant reference to an array. Because of this, we can still change the elements of a constant array.

// Where is Waldo
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

console.log(whereIsWaldo.indexOf("Eggbert"));
whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);
const a = whereIsWaldo[1];
a.splice(2, 1, "No One");
// console.log(a);
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

// Excited Kitten

for (let i = 0; i < 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

const items = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    let item = items[Math.floor(Math.random() * items.length)];
    console.log(item);
  }
}

// Find the Median

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

function median(array) {
  const mid = Math.floor(array.length / 2),
    nums1 = nums.sort((a, b) => a - b);
  console.log(nums1);
  return array.length % 2 !== 0 ? nums1[mid] : nums1[mid - 1] + nums1[mid] / 2;
}

console.log(median(nums));

// if (nums.length % 2 !== 0) {
//   let idx = Math.floor(nums.length / 2);
//   console.log(`The median numver is ${nums[idx]}`);
// } else {
//   let sum = nums[nums.length / 2] + nums[nums.length / 2 - 1];
//   console.log(`The median numver is ${sum / 2}`);
// }

// Return of the Closets

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

const kristynsShoe = kristynsCloset[0];
console.log(kristynsShoe);
kristynsCloset.shift();

let acc = thomsCloset[2];
acc.push(kristynsShoe);
// console.log(acc);
// console.log(thomsCloset);

// Dirty Laundry

kristynsCloset.forEach((e) => console.log(`WHIRR: Now washing${e}`));
console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);
