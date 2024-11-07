const number = 123456789;
const reversedStr = number.toString().split("").reverse().join("");
console.log(reversedStr);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const ages = [32, 33, 6, 40];
const flat = [1, 2, [3, 4]];
const flatMap = [1, 2, 3, 4, 5, 6, 7];
let result = "";

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

const checkAge = (age) => {
  return age > 18;
};

const multiply = (x) => {
  return x * 2;
};

const showJson = (key, value) => {
  result += `${key}: ${value}\n`;
};

const handleReduce = (accumulator, currentValue) => {
  // console.log("accumulator: ", accumulator);
  // console.log("currentValue: ", currentValue);
  return accumulator + currentValue;
};

//prototype
fruits.myUcase();
console.log("prototype: ", fruits);

console.log("concat: ", fruits.concat(ages)); //concatenate two arrays

console.log("copyWithin: ", fruits.copyWithin(2, 0, 2)); //copy the first two elements to the last two elements

console.log("entries: ", Array.from(fruits.entries())); //return an array iterator object with key/value pairs

console.log("every: ", ages.every(checkAge)); //check if all elements satisfy the condition

console.log("fill: ", fruits.fill("Kiwi", 1, 3)); //fill with Kiwi from index 1 to 3

console.log("filter: ", ages.filter(checkAge)); //new array with elements that satisfy the condition

console.log("find: ", ages.find(checkAge)); //first element that satisfies the condition

console.log("findIndex: ", ages.findIndex(checkAge)); //index of the first element that satisfies the condition

console.log("flat: ", flat.flat()); //flatten the array

console.log("flatMap: ", flatMap.flatMap(multiply)); //map and flatten the array

fruits.forEach(showJson);
console.log(result); //iterate through the array

console.log("from: ", Array.from("Hello")); //create an array from a string

console.log("includes: ", fruits.includes("Banana")); //check if the array includes the element

console.log("indexOf: ", fruits.indexOf("Apple")); //return the index of the element

console.log("isArray: ", Array.isArray(fruits)); //check if the object is an array

console.log("join: ", fruits.join(" & ")); //join the elements with &

console.log("keys: ", Array.from(fruits.keys())); //return an array iterator object with keys

console.log("map: ", ages.map(multiply)); //new array with the result of the function

console.log("pop: ", fruits.pop()); //remove the last element

console.log("push: ", fruits.push("Kiwi")); //add an element to the end

console.log("reduce: ", ages.reduce(handleReduce)); //reduce the array to a single value

console.log("reduceRight: ", ages.reduceRight(handleReduce)); //reduce the array from right to left

console.log("reverse: ", fruits.reverse()); //reverse the array

console.log("shift: ", fruits.shift()); //remove the first element

console.log("slice: ", fruits.slice(1, 3)); //return a new array from index 1 to 3

console.log("some: ", ages.some(checkAge)); //check if any element satisfies the condition

console.log("sort: ", fruits1.sort()); //sort the array

console.log("splice: ", fruits1.splice(2, 0, "Lemon", "Kiwi")); //add Lemon and Kiwi from index 2

console.log("toString: ", fruits1.toString()); //convert the array to a string

console.log("unshift: ", fruits1.unshift("Lemon", "Kiwi")); //add Lemon and Kiwi to the beginning

console.log("values: ", Array.from(fruits1.values())); //return an array iterator object with values

console.log("valueOf: ", fruits1.valueOf()); //return the primitive value of the array

console.log(
  "findIndex: ",
  fruits1.findIndex((fruit) => fruit === "Apple")
); //find the index of the element

//Boolean
const bool = new Boolean(false);
console.log(bool); //false
console.log(bool.valueOf()); //false

//date methods
console.log("Date: ", Date());

//Global

console.log("decodeURI: ", decodeURI("my test.asp?name=ståle&car=saab")); //decode a URI

console.log(
  "decodeURI: ",
  decodeURIComponent("my%20test.asp?name=ståle&car=saab")
); //decode a URI component

console.log("encodeURI: ", encodeURI("my test.asp?name=ståle&car=saab")); //encode a URI

console.log(
  "encodeURIComponent: ",
  encodeURIComponent("my test.asp?name=ståle&car=saab")
); //encode a URI component

console.log("eval: ", eval("10 * 5")); //evaluate a string as a JavaScript code

console.log("String: ", String(123)); //convert a number to a string

console.log("isFinite: ", isFinite(123)); //check if the value is finite

console.log("isNaN: ", isNaN("Hello")); //check if the value is NaN

console.log("parseFloat: ", parseFloat("10.33")); //parse a string and return a floating point number

console.log("parseInt: ", parseInt("10")); //parse a string and return an integer

//JSON
const obj = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(obj);
console.log("JSON: ", myJSON);
const myObj = JSON.parse(myJSON);
console.log("JSON: ", myObj);

//Math
console.log("PI: ", Math.PI); //PI
console.log("abs: ", Math.abs(-4.7)); //absolute value
console.log("sqrt: ", Math.sqrt(16)); //square root
console.log("cbrt: ", Math.cbrt(8)); //cube root
console.log("ceil: ", Math.ceil(4.4)); //ceiling
console.log("round: ", Math.round(4.7)); //round
console.log("floor: ", Math.floor(4.7)); //floor
console.log("random: ", Math.random()); //random number
console.log("max: ", Math.max(0, 150, 30, 20, -8, -200)); //maximum value
console.log("min: ", Math.min(0, 150, 30, 20, -8, -200)); //minimum value
console.log("pow: ", Math.pow(8, 2)); //power
console.log("log: ", Math.log(8)); //logarithm
console.log("exp: ", Math.exp(1)); //exponential

//Number
console.log("toExponential: ", (123456).toExponential()); //convert a number to exponential
console.log("toFixed: ", (9.656).toFixed(2)); //convert a number to fixed-point
console.log("tolocaleString: ", (123456).toLocaleString()); //convert a number to a string with a specific locale
console.log("tolocaleString-fi-FI: ", (123456).toLocaleString("fi-FI")); //convert a number to a string with a specific locale
console.log(
  "tolocaleString-en-US: ",
  (123456).toLocaleString("en-US", { style: "currency", currency: "USD" })
); //convert a number to a string with a specific locale
console.log("toPrecision: ", (9.656).toPrecision(5)); //convert a number to a string with a specific precision
console.log("toString: ", (123).toString()); //convert a number to a string
console.log("valueOf: ", (123).valueOf()); //return the primitive value of a number

//Object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { country: "USA", city: "New York" };

console.log("assign: ", Object.assign({}, obj1, obj2));

console.log("create: ", Object.create(obj1).name);

const user = {};

// Using Object.defineProperties to add multiple properties
Object.defineProperties(user, {
  name: {
    value: "Alice",
    writable: true,
    configurable: true,
    enumerable: true,
  },
  age: {
    value: 25,
    writable: false,
    configurable: false,
    enumerable: true,
  },
  greeting: {
    get: function () {
      return `Hello, my name is ${this.name}`;
    },
    configurable: true,
    enumerable: false,
  },
});

const fruitsObj = { Bananas: 300, Oranges: 200, Apples: 500 }; //create an object
console.log("entries: ", Object.entries(fruitsObj)); //return an array with key/value pairs

Object.freeze(fruitsObj);
fruitsObj.Bananas = 500; //cannot change the value
console.log("freeze: ", fruitsObj.Bananas); //300

result = [
  { name: "apples", quantity: 300 },
  { name: "bananas", quantity: 200 },
  { name: "cherries", quantity: 400 },
  { name: "pears", quantity: 100 },
];

// const test = Object.groupBy(result, ({ quantity }) =>
//   quantity > 200 ? "big" : "small"
// );
// console.log("groupBy: ", test);

console.log("keys: ", Object.keys(user)); //return an array with keys

//////////////////
//////////////////
//////////////////
//////////////////

console.log("eval: ", eval("10 * 5")); //evaluate a string as a JavaScript code

console.log(
  number.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // "$1,234,567.89"
console.log(number.toLocaleString("de-DE", { minimumFractionDigits: 2 })); // "1.234.567,89"

const date = new Date();

console.log(
  date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

console.log(
  date.toLocaleString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
);
