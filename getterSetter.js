const person = {};
person.name = "Sowmik";
person.email = "sowmik.sec@gmail.com";
console.log(person);

class Person {
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
}
const p1 = new Person("Ahsan", "ahsan@gmail.com");
const p2 = new Person("Habib", "habib@gmail.com");
const p3 = new Person("Sowmik", "sowmik.sec@gmail.com");

console.log(p1.name);
p1.name = "AAAAAAAhsan";
console.log(p1.name);
