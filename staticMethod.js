const person = {};
person.name = "Sowmik";
person.email = "sowmik.sec@gmail.com";
console.log(person);

class Person {
  static className = "Person";
  static PI = 3.1416;
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (name === "Ahsan") return;
    this._name = name;
  }
  print() {
    console.log(this);
  }
  toString() {
    return `Name: ${this._name}, Email: ${this._email}`;
  }
  static isValid(age) {
    return age >= 18;
  }
  static equal(p1, p2) {
    if (p1.name !== p2.name) return false;
    if (p1.email !== p2.email) return false;
    return true;
  }
}
const p1 = new Person("Ahsan", "ahsan@gmail.com");
const p2 = new Person("Habib", "habib@gmail.com");
const p3 = new Person("Sowmik", "sowmik.sec@gmail.com");
const p6 = new Person("Sowmik", "sowmik.sec@gmail.com");

const p4 = { _name: "Test", _email: "test@gmail.com" };

console.log(Person.className);
console.log(Person.PI);
p1.print();
// console.log(p1 instanceof Person);
// console.log(p4 instanceof Person);

const testUser = {
  name: "Test",
  email: "test@gmail.com",
  age: 27,
};
let p5 = null;
if (Person.isValid(testUser.age)) {
  p5 = new Person(testUser.name, testUser.email);
}

console.log(p5);

console.log(Person.equal(p3, p6));
