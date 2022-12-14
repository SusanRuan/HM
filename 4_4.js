// III. Arrays & Control flow

const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
myArray.reverse();
console.log(myArray);

const a = 101;
if (a < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

const b = 10;

if (b < 5) {
  console.log("little number");
} else if (b > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

// IV. Functions

function printCool(name) {
  console.log(`${name} is cool`);
}
console.log(printCool("Captain Reynolds"));

// Objects

let user = { name: "max", email: "max@gmail.com", age: 30, purchased: [] };

user.email = "newmax@gmail.com";
user.age++;
console.log(user.age);

user.location = "new york city";
console.log(user);

user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

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

user.purchased.forEach((element) => console.log(element));

const arr = user.friend.purchased;
console.log(arr);
arr.forEach((element) => console.log(element));

function oldAndLoud(person) {
  console.log(person.age, person.name);
  person.age += 1;
  person.name = person.name.toUpperCase();
  console.log(person);
}

oldAndLoud(user);

// Cat Combinator

const cat1 = { name: "mary", breed: "birman", age: 3 };
console.log(cat1.name);
console.log(cat1.breed);

const cat2 = { name: "harry", breed: "scottish fold", age: 2 };

function combineCats(mama, papa) {
  console.log(mama);
  console.log(papa);
}

combineCats(cat1, cat2);

function combineCat(mama, papa) {
  return {
    name: mama.name + papa.name,
    breed: mama.breed + "-" + papa.breed,
    age: 1,
  };
}

console.log(combineCat(cat1, cat2));
