class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

const gus = new Hamster("Gus");
console.log(gus.getPrice());

////

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 5;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`his name is ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const timmy = new Person("Timmy");
timmy.age = 5;
console.log(timmy.getAge());
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
console.log(timmy.getWeight());
console.log(timmy.mood);
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
console.log(timmy.getWeight());
timmy.age = 9;
timmy.buyHamster(gus);
console.log(timmy.bankAccount);
console.log(timmy.hamsters);
timmy.age = 15;
timmy.eat();
timmy.eat();
timmy.exercise();
timmy.exercise();

////

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  makeDinner(appetizer, entree, dessert) {
    return new Dinner(appetizer, entree, dessert);
  }
}

const dinner1 = new Chef().makeDinner("Caesar Salad", "Steak", "Cake");
const dinner2 = new Chef().makeDinner("Leafy Green Salad", "Fish", "Ice Cream");
const dinner3 = new Chef().makeDinner("Greek Salad ", "Shrimp", "Yogurt");
console.log(dinner1);
console.log(dinner2);
console.log(dinner3);
