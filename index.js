const Person = require("./Person");
const Teacher = require("./Teacher");
const Student = require("./Student");

const p = new Person("Ahsan", "ahsan@gmail.com");
const t = new Teacher("Johnney", "johnney@test.com", "CSE", 40000);
const s = new Student(
  "Sowmik",
  "sowmik.sec@gmail.com",
  ["Data structure", "Algorithm"],
  75000
);

// console.log(p);
// console.log(s);
// console.log(t);

s.print();
