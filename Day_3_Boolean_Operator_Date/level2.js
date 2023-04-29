// ex1
const base = prompt("Enter base");
const height = prompt("Enter height:");
console.log(`Ex1: The area of the triangle is ${ 0.5 * Number(base) * Number(height)}.`);

// ex2
const sideA = prompt("Enter side a:");
const sideB = prompt("Enter side b:");
const sideC = prompt("Enter side c:");
console.log(`Ex2: The perimeter of the triangle is ${ Number(sideA) + Number(sideB) + Number(sideC)}.`);

// ex3
const length = prompt("Enter length:");
const width = prompt("Enter width:");
console.log(`Ex3: The area of rectangle is ${ (Number(length) * Number(width))}.  The perimeter of the rectangle is ${ (Number(length) + Number(width))*2}.`);

// ex4
const radius = prompt("Enter radius:");
console.log(`Ex4: The area of circle is ${ (Number(radius) * Number(radius) * 3.14)}.  The perimeter of the circle is ${ (2*Number(radius) * 3.14)}.`);

// ex5
// Define the equation
const equation = "y = 2x - 2";

// Calculate the slope
const slope = 2;

// Calculate the x-intercept
const xIntercept = 1;

// Calculate the y-intercept
const yIntercept = -2;

// Display the results
console.log(`Ex5: Equation: ${equation}`);
console.log(`Slope: ${slope}`);
console.log(`X-Intercept: (${xIntercept}, 0)`);
console.log(`Y-Intercept: (0, ${yIntercept})`);

// ex6
const m = (10 - 2) / (6 - 2)

// ex7
console.log(slope === m)

// ex8
// 0 = (x + 3)^2
// x = -3.

// ex9
const hours = prompt("Enter hours");
const rate_per_hour = prompt("Enter rate per hour:");
console.log(`Ex9: The area of the triangle is ${  Number(hours) * Number(rate_per_hour)}.`);

// ex10
const name = 'An'
name.length > 7 
    ? console.log("your name is long")
    : console.log("your name is short")

// ex11
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
firstName.length >  lastName.length
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)

// ex12
let myAge = 250
let yourAge = 25
myAge >  yourAge
    ? console.log(`I am ${myAge} years older than you.`)
    : console.log(`I am ${myAge} years younger than you.`)

// ex13
const birthYear = prompt("Enter birth year");
const now = new Date() 
now.getFullYear() - Number(birthYear) >= 18
    ? console.log(`You are ${now.getFullYear() - Number(birthYear)}. You are old enough to drive`)
    : console.log(`You are ${now.getFullYear() - Number(birthYear)}. You will be allowed to drive after ${18 - (now.getFullYear() - Number(birthYear))} years.`)

// ex14
const number_of_years_you_live = prompt("Enter number of years you live");
console.log(`You lived ${Number(number_of_years_you_live) * 31536000} seconds.`)

// ex15
// YYYY-MM-DD HH:mm format:
const year = now.getFullYear();
const month = String(now.getMonth()+1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

const YYYY_MM_DD = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log(YYYY_MM_DD);
// DD-MM-YYYY HH:mm format:

const DD_MM_YYYY = `${day}-${month}-${year} ${hours}:${minutes}`;
console.log(DD_MM_YYYY);
// DD/MM/YYYY HH:mm format:
const DDMMYYYY = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log(DDMMYYYY);
