const UniPerson = require("./UniPerson");

const _employeeID = Symbol(employeeID);
const _salary = Symbol("salary");

class Employee extends UniPerson {
  constructor(id, name, employeeID, guardian) {
    super(id, name);
    this[_employeeID] = employeeID;
    this[_salary] = null;
  }
  get employeeID() {
    return this[_employeeID];
  }
  set salary(value) {
    this[_salary] = value;
  }
  toString() {
    super.toString();
    console.log(`EmployeeID = ${this[_employeeID]}, Salary = ${this[_salary]}`);
  }
}

module.exports = Employee;
