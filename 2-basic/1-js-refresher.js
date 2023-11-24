// variables : container to store data
const firstName = 'John'; // string
const age1 = 26; // number
const gender = 'M'; // string
const isNice = true; // boolean

// functions
const introduction = (firstName, age, gender) => {
    return `Name is ${firstName}, age ${age} and the gender is ${gender}`;
};

console.log(introduction(firstName, age1, gender));

// objects
const person = {
    name: 'John',
    age: 24,
    greet() {
        console.log(`Hello there, I am ${this.name}`);
    }
};
console.log(person.greet());

// arrays
const numbers = [1, 2, 3, 4, 5];

numbers.map((num) => num * 2).forEach((num) => console.log(num));

// spread and rest operator
const newNums = [...numbers];
console.log(newNums);

const addNums = (...args) => {
    return args.reduce((sum, item) => sum + item);
};

console.log(addNums(1, 2, 3, 4));

// destructuring
const { age } = person;
console.log(age);

// asynchronous programming
setTimeout(() => {
    console.log('Hi');
}, 2 * 1000);
