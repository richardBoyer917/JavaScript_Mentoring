interface Employee {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
}

let firstName: string = "John";
let lastName: string = "Doe";
let age: number = 25;
let jobTitle: string = "Front-End Developer";
const employee: Employee = {
  firstName,
  lastName,
  age,
  jobTitle,
};

console.log("employee: ", employee);

console.log("firstName: ", typeof firstName);

const json = JSON.parse(
  '{"firstName": "John", "lastName": "Doe", "age": 25, "jobTitle": "Front-End Developer"}'
);
console.log("json: ", json, " --- ", typeof json);

let number = JSON.parse("25");
console.log("number: ", number, " --- ", typeof number);
