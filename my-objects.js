// # Scope

// **Instructions**
// 1. Create the following object:
// ```javascript

const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};

// 2. Create a method that prints the following:
// ```javascript
// "John smith is a student in class 12"
// ```
console.log(
  `${student.firstName} ${student.lastName} is a student in class ${student.class}.`
);

// 3. Create a person object. Include the person's first and last name, age, job, city etc.
// Create a method to print data from the object e.g. "John Smith is a 41 year old engineer living in France".

const person = {
  firstName: "John",
  lastName: "Smith",
  age: 41,
  job: "engineer",
  city: "Paris",
  country: "France",
  bio: function () {
    console.log(
      `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city} in ${this.country}.`
    );
  },
  greeting: function () {
    console.log(`Hi! I\'m ` + this.firstName + `!`);
  },
};

person.bio();
person.greeting();

// ## Bonus

// 3. Write a method to get the length of the person object.

const lengthOfPersonObject =
  person.firstName.length +
  person.lastName.length +
  toString(person.age).length +
  person.job.length +
  person.city.length +
  person.country.length;
console.log("Length of person object: " + lengthOfPersonObject);
