let employee: {
  firstName: string
  lastName: string
  age: number
  jobTitle: string
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Front-End Developer',
}
console.log(employee)

let vacant: {} = {}
console.log(vacant.toString())

let scores: (string | number)[]
scores = ['Programming', 5, 'Software Design', 4]
console.log('scores : ', typeof (scores))

let result: any
result = 10.123
console.log(result.toFixed())

let discount: number
let itemCount = 11

if (itemCount > 0 && itemCount <= 5) {
  discount = 5  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
  discount = 10 // 10% discount 
} else {
  discount = 15 // 15%
}

console.log(`You got ${discount}% discount. `)

interface Person {
  readonly ssn: string
  firstName: string
  lastName: string
}

let person: Person
person = {
  ssn: '171-28-0926',
  firstName: 'John',
  lastName: 'Doe'
}

console.log('person : ', person)