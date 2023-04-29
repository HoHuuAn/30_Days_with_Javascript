// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'An'
const lastName = 'Ho'
const country = 'VietNam'
const city = 'Ho Chi Minh city'
const age = 20
const isMarried = false
const year = 2023
console.log("Ex1:")
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// Check if type of '10' is equal to 10
console.log("Ex2:")
console.log(typeof ('10' == 10))

// Check if parseInt('9.8') is equal to 10
console.log("Ex3:")
console.log((parseInt('9.8') == 10))

// Boolean value is either true or false
// Write three JavaScript statement which provide truthy value
console.log("Ex4:")
console.log(10 == 10)
console.log(5 == 5)
console.log(1 == 1)
// Write three JavaScript statement which provide falsy value
console.log(10 == 9)
console.log(8 == 9)
console.log(1 == 9)

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log("Ex5:")
// 4 > 3
console.log(4 > 3)
// 4 >= 3
console.log(4 >= 3)
// 4 < 3
console.log(4 < 3)
// 4 <= 3
console.log(4 <= 3)
// 4 == 4
console.log(4 == 4)
// 4 === 4
console.log(4 === 4)
// 4 != 4
console.log(4 != 4)
// 4 !== 4
console.log(4 !== 4)
// 4 != '4'
console.log(4 != '4')
// 4 == '4'
console.log(4 == '4')
// 4 === '4'
console.log(4 === '4')
// Find the length of python and jargon and make a falsy comparison statement.
console.log('python' === 'jargon')

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log("Ex6:")
// 4 > 3 && 10 < 12 true
// 4 > 3 && 10 > 12 false
// 4 > 3 || 10 < 12 true
// 4 > 3 || 10 > 12 true
// !(4 > 3) false
// !(4 < 3) true
// !(false) true
// !(4 > 3 && 10 < 12)  false
// !(4 > 3 && 10 > 12) true
// !(4 === '4')  true
// There is no 'on' in both dragon and python: false

// Use the Date object to do the following activities
console.log("Ex7:")
const now = new Date()
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth())
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime()) 