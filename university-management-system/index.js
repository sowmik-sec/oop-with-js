const { Guardian } = require("./Person");
const { Contact } = require("./contact");
const guardian = new Guardian(1, "Mr. Khaled", "Engineer", 75000);
guardian.blood = "O+";
guardian.contact = new Contact({
  id: 1,
  email: "khaled@test.com",
  phone: "42742942",
});

// console.log(guardian);
console.log(guardian.contact);
