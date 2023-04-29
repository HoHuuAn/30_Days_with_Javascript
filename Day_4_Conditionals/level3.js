// ex1
const month = Number(prompt("Enter a month (1-12):"));
const year = Number(prompt("Enter a year:"));

const daysInMonth = [31, (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(`There are ${daysInMonth[month - 1]} days in the month of ${month}, ${year}.`);

// ex2
month = Number(prompt("Enter a month (1-12):"));
year = Number(prompt("Enter a year:"));

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

console.log(`There are ${daysInMonth[month - 1]} days in the month of ${month}, ${year}.`);
