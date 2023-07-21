const Person = require("./Person");
const _subjects = Symbol("subjects");
const _salary = Symbol("salary");
class Teacher extends Person {
  constructor(name, email, subjects, salary) {
    super(name, email);
    this[_subjects] = subjects;
    this[_salary] = salary;
  }
  get subjects() {
    return this[_subjects];
  }
  get salary() {
    return this[_salary];
  }
}

module.exports = Teacher;
