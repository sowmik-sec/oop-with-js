const person = {};
person.name = "Sowmik";
person.email = "sowmik.sec@gmail.com";
console.log(person);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  changeName(name) {
    this.name = name;
  }
  sendEmail(msg) {
    console.log("Sending Email", msg);
  }
}
const p1 = new Person("Ahsan", "ahsan@gmail.com");
const p2 = new Person("Habib", "habib@gmail.com");
const p3 = new Person("Sowmik", "sowmik.sec@gmail.com");
console.log(p1);
console.log(p2);
console.log(p3);
