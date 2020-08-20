console.log('Hello, TypeScript');
const add = (a: number, b: number) => a + b;
const sum = add(2,2);
console.log(sum);

// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let numerator: number = 42;
let denominator: number = 6;
let outcome = numerator / denominator;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let name_: string = 'Erick';
let greeting = `Me llamo ${name_}`;

// Array only one defined type
let people: string[] = [];
people = ['Isabel','Nicole','Raul'];
//people.push(900); -> this mark error because it's not a number

// Array of 1 or more defined types
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; -> Throws Error because the order it's different

// Enum
enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

let favouriteColor: Color = Color.Red;
console.log( `My favourite color is ${favouriteColor}` );

// Any
let joker: any = 'Joker';
joker = { type: 'Wildcard' };

// Object
let someObject: object = { species: 'Dog' }


/************  FUNCTIONS  ************/

const add_ = (a:number, b:number) => a + b;

const sum_ = add(4,5);

// This way you can specify the type of value will return the function. In this case we specify that will return another function.
const createAdder = (a:number): (number) => number => { 
    return function (b:number) {
        return b + a;
    }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6);


//const fullName = (firstName: string, lastName?: string): string => `${firstName} ${lastName}`; // Adding a '?' before the type, you can specify that this argument is optional 
const fullName = (firstName: string, lastName: string = 'Doe'): string => `${firstName} ${lastName}`; // If you want to hace a default value, you can add it with a '=' after the type declaration 
const erick = fullName('Erick');

console.log(erick);

