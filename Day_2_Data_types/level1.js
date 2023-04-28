// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let string = '30 Days with JavaScript'
// Print the string on the browser console using console.log()
console.log(string)

console.log(string.length)
// Print the length of the string on the browser console using console.log()

// Change all the string characters to capital letters using toUpperCase() method
console.log(string.toUpperCase())

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(string.toLowerCase())

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(string.substr(3, 4))

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(string.substring(3, 7))

// Check if the string contains a word Script using includes() method
console.log(string.substr(3, string.length))

// Split the string into an array using split() method
console.log(string.includes('Script'))

// Split the string 30 Days Of JavaScript at the space using split() method
array = string.split(" ")
console.log(array)

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
array1 = string1.split(",")
console.log(array)

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(string.replace('JavaScript', 'Python'))

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(string.charCodeAt(15))

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(string.charCodeAt(12))

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(string.indexOf('a'))

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(string.lastIndexOf('a'))


// Use indexOf to find the position of the first occurrence of the word because 
// in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string2.indexOf('because'))


// Use lastIndexOf to find the position of the last occurrence of the word because 
// in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string2.lastIndexOf('because'))

// Use search to find the position of the first occurrence of the word because 
// in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(string2.search('because'))

// Use trim() to remove any trailing whitespace at the beginning and the end of a string
// .E.g ' 30 Days Of JavaScript '.
let string3 = ' 30 Days with JavaScript '
console.log(string3.trim())

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(string.startsWith('30'))

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(string.endsWith('JavaScript'))

// Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi
console.log(string.match(pattern)) 


// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let substring1  = '30 Days of'
let substring2 = ' JavaScript'
let str = ''
console.log(str.concat(substring1, substring2))

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(string.repeat(20))