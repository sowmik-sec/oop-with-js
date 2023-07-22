const Person = require("./Person");

const _profession = Symbol("profession");
const _income = Symbol("income");
const _contact = Symbol("contact");

class Guardian extends Person {
  constructor(id, name, profession, income) {
    super(id, name);
    this[_profession] = profession;
    this[_income] = income;
    this[_contact] = null;
  }
  get profession() {
    return this[_profession];
  }
  set profession(value) {
    this[_profession] = value;
  }
  get contact() {
    return this[_contact];
  }
  set contact(value) {
    this[_contact] = value;
  }

  get income() {
    return this[_income];
  }
  set income(value) {
    this[_income] = value;
  }
  toString() {
    return `${super.toString()} Profession = ${this[_profession]}, Income = ${
      this[_income]
    }`;
  }
}
module.exports = Guardian;
