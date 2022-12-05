class Governor {
  static description = "he is our new governor";
  static getNames() {
    return ["Eric", "leo", "marcus"];
  }
}

console.log(Governor.description + " " + Governor.getNames()[2]);

/////

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  getName() {
    return `${this.name}`;
  }
  getJob() {
    return `${this.name} is working as a ${this.job}`;
  }
  getAge() {
    return `${this.name} is ${this.age} years old`;
  }
}

const tim = new Person("tim", 29, "marketing");
console.log(tim.getJob());

class PostalWorker extends Person {
  constructor(name, age, job) {
    super(name, age, job);
  }
  getDesc() {
    console.log(`${this.name} works as a full-time ${this.job}`);
  }
}

class Chef extends Person {
  getJob() {
    console.log("his job is a chef");
  }
  getYears() {
    console.log("he works here for 4 years");
  }
}

const worker1 = new PostalWorker("Tod", 30, "social worker");
const worker2 = new PostalWorker("Judy", 32, "IT");
worker1.getDesc();
worker2.getDesc();
console.log(worker1.getJob());
console.log(worker2.getAge());

const chef1 = new Chef("mary", 25, "manager");
const chef2 = new Chef("alex", 40, "doctor");
chef1.getJob();
chef1.getYears();
console.log(chef1.getAge());
console.log(chef2.getAge());

////

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
  deposit() {
    console.log(
      `${this.ownerName}, you deposit $500 in your account ${
        this.acctNum
      }, the balance is $ ${Number(this.balance) + 500} now`
    );
  }
  withdraw() {
    console.log(
      `Hey ${
        this.ownerName
      }, you just withdrawed $300 from your account,and the balance is $ ${
        Number(this.balance) - 300
      } `
    );
  }
}

const annaAccount = new BankAccount("anna", 1800, 6668888);
annaAccount.deposit();
annaAccount.withdraw();

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, overdraftEnabled) {
    super(ownerName, balance, acctNum);
    this.overdraftEnabled = overdraftEnabled;
  }
  withdraw() {
    console.log(
      `your account ${this.acctNum} is overdrafted ${this.overdraftEnabled} dollars, please make a deposit asap!`
    );
  }
}

const aprilAccount = new CheckingAccount("april", 400, 7772222, 900);
aprilAccount.withdraw();

class SavingsAccount extends BankAccount {
  withdraw() {
    console.log(
      `your account ${this.acctNum} is overdrafted, you can not withdraw!`
    );
  }
}

const samAccount = new SavingsAccount("sam", 700, 9995555);
samAccount.withdraw();
