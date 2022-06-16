// JAVASCRIPT CODE
console.log("Hello world");
// IN NODE: Install node, go to command prompt,cd into the present directory and run- node index.js( ull get hello world).You can also try it on the terminal here

// VARIABLES(var, let, const)
// before ES6 - var
// let(best practise)

// let name = 'Rhema';
// console.log(name);
// b4 we put rhema "let name" was undefined by default

// RULES FOR NAMING VARIABLES

// The variable name (i.e name)Cannot be a reserved keyword( let, var,if, else)
// They should be meaningful(avoid names like; a,b ,bu)
// They cannot start with a number
// Thet cannot contain a space or -()
// Are case-sensitive
// To declare multiple variables, do it with commas on one line(e.g

//     let firstName = 'Rhema', lastName = 'Sunday';

//     or(BEST PRACTISE)

let firstName = "Rhema";
let lastName = "Sunday";
//   )

// CONSTANTS

// changing or reassigning variables:

let localStorage = 0.5;
localStorage = 1;
console.log(localStorage);

// If you substitute let for const, youll get an error. Const is used when you dont need to reassign a variable

// WHAT KIND OF VALUES DO WE ASSIGN TO A VARIABLE?
// There are two categories of types in JS:
// i.) Primitives/Value types ii.) Reference Types (focus on this later)
// Strings
// Numbers
// Boolean
// undefined
// null

// let name = 'Mosh'; //String Literal (fancy name for a string)
// let age = 12; //Number Literal
// let isApproved = false; //Boolean Literal(in case of orders.N.B They cannot be variable names cos they are reserve keywords)
// let middleName = undefined; //  or let middleName;
// let lastName = null; // (Where u wana explicitly clear the value of a variable or where there are no values )

// THERE ARE TWO TYPES OF LANGUAGES
// i.) STATIC  (when we set a variable, it cant be changed in the future( string name = 'John';))

// ii.) DYNAMIC (variable type can be changed at runtime(let name = 'John'))

// e.g 1. Go to your browser console and check "typeof name", ull get string. but if we reassign a number
// i.e name = 1 press enter and enter the operator "typeof name", ull get number this time.

// 2. Also on your browser console, use "typeof age", u'll get "number". but if we reassign a number
// i.e number = 20.8  press enter and enter the operator "typeof number", ull still get "number".

// In JS all number types are numbers

// 3. Go to your browser console and check "typeof isApproved", ull get "boolean"
// 4. Go to your browser console and check "typeof firstName", ull get "undefined" for also a value called undefined(i.e Primitive/Value types)
// 5. Go to your browser console and check "typeof selectedColor", ull get "object"

// You can now clear the console by pressing ctrl and l after each try

// ii.) Reference Types
//a.) Object: Like a real life object(e.g a person :has name, age...(properties)
// We can put multiple related variables in an object

// e.g insteaed of :
let name = "Mary";
let age = 28;

// we can put them into(declare) a person object
// const or
let person = {
  name: "Mary",
  age: 28,
};

console.log(person);

//To access a property,

//1. Dot Notation
// person.name = 'John';
// u can also read the person object like this
// console.log(person.name);

//2. Bracket Notation
// person['name'] = 'Mary';

// console.log(person.name);
// for now just stick to dot notations(cleaner and easier)

// )
//b.) Arrays(A datastructure used to represent a list of items)
let selectedFruits = ["orange", "mango"];
//  selectedFruits[2] = '1'
//  console.log(selectedFruits)
console.log(selectedFruits[0]); //ull get 'orange'
// On the browser console, "typeof selectedFruits" is an object

//  console.log(selectedFruits.); automatically displays properties cos it has squarebrackets
// e.g the length property:

console.log(selectedFruits.length); // ull get 3

//c.) Functions(A set of statements that perform a task or calculates and returns a value.
// A real world application contains hundreds or thousands of functions
// working together to achieve the functionality of that application)

// e.g

function greeting() {
  console.log("Hey bro");
}

greeting();
// using parameters and arguments,
function greeting(name) {
  console.log("Hey" + name);
}

greeting("Rhema");
greeting("Tobi");

function greeting(name, middleName) {
  console.log("Hello" + name + "" + middleName);
  // or use template literals
}

greeting("Rhema", "Emeka");
// ull get HelloTobiundefined because a corresponding argument was absent

// Calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));
// OR
let newnumber = square(2);
console.log(newnumber);
// Interestingly there are two function calls here,: console.log() and square().
// ..cos we passed in an argument in the two calls
