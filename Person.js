const _name = Symbol("name");
const _email = Symbol("email");
class Person {
  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }
  get name() {
    return this[_name];
  }
  get email() {
    return this[_email];
  }

  set name(name) {
    if (name === "Ahsan") return;
    this[_name] = name;
  }
  set email(email) {
    this[_email] = email;
  }
  print() {
    console.log(this);
  }
  toString() {
    return `Name: ${this[_name]}, Email: ${this[_email]}`;
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

module.exports = Person;
