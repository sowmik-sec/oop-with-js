const person = {};
person.name = "Sowmik";
person.email = "sowmik.sec@gmail.com";
console.log(person);

class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }
  getName() {
    return this._name;
  }
  getEmail() {
    return this._email;
  }
  setName(name) {
    this._name = name;
  }
  setEmail(email) {
    this._email = email;
  }
  changeName(name) {
    this.name = name;
  }
  sendEmail(msg) {
    console.log(this.email);
    console.log("Sending Email", msg);
  }
  sendMail(msg) {
    console.log("To", this._email);
    console.log("MSG:", this._sanitizeMsg(msg));
  }
  _sanitizeMsg(msg) {
    return msg.trim().toLowerCase();
  }
  print() {
    console.log(this);
  }
}
const p1 = new Person("Ahsan", "ahsan@gmail.com");
const p2 = new Person("Habib", "habib@gmail.com");
const p3 = new Person("Sowmik", "sowmik.sec@gmail.com");

console.log(p1.getName());

p1.setName("fadsfasd");
console.log(p1);

p1.sendMail("        WOOW! IT IS WORKING");
