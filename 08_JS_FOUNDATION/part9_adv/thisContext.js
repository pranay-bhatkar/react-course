const person = {
  name: "Pranay",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "Bhatkar" });

boundGreet();

// bind, call and apply
