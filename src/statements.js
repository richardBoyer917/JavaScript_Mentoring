//for in
let result = "";

const person = { fname: "John", lname: "Doe", age: 25 };
const cars = ["BMW", "Audi", "Mercedes"];

for (let x in person) {
  result += person[x] + " ";
}

console.log("for in: ", result);

result = "";

for (let car of cars) {
  result += car + " ";
}

console.log("for of: ", result);

console.warn("This is a warning message!");

console.info("This is an informational message.");

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
console.table(users);

function foo() {
  bar();
}
function bar() {
  console.trace("Trace of the call stack:");
}
foo();

let value = 42;
console.assert(value === 42, "Value is not 42"); // No output since the condition is true
console.assert(value !== 42, "Value is not 42"); // Logs an error message since the condition is false

console.count("Counter");
console.count("Counter");
console.count("Counter");

console.group("User Info");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd();

console.time("Timer1");
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}
console.log("sum: ", sum);
console.timeEnd("Timer1"); // Logs the time taken to execute the loop
