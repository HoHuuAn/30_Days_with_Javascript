// Declare an empty array;
const array = []
// Declare an array with more than 5 number of elements
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
]
// Find the length of your array
console.log(countries.length)
// Get the first item, the middle item and the last item of the array
console.log('first item', countries[1])
console.log('middle item', countries[Math.floor(countries.length / 2)])
console.log('last item', countries[countries.length - 1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['apple', 3.14, true, { name: 'John' }, null, 'banana', 42, false]
console.log(mixedDataTypes.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log('first item', itCompanies[1])
console.log('middle item', itCompanies[Math.floor(itCompanies.length / 2)])
console.log('last item', itCompanies[itCompanies.length - 1])
// Print out each company
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    let uppercaseName = itCompanies[i].toUpperCase();
    console.log(uppercaseName);
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = itCompanies.slice(0, -1).join(', ') + ' and ' + itCompanies.slice(-1);
console.log(sentence + ' are big IT companies.');
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let companyToFind = 'Microsoft';
if (itCompanies.includes(companyToFind)) {
    console.log(companyToFind + ' exists in the itCompanies array.');
} else {
    console.log('A company is not found.');
}
// Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] === 'o') {
            count++;
        }
    }
    if (count <= 1) {
        filteredCompanies.push(itCompanies[i]);
    }
}
console.log(filteredCompanies);
// Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);
// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
// Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log(firstThreeCompanies);
// Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log(lastThreeCompanies);
// Slice out the middle IT company or companies from the array
let start = Math.ceil(itCompanies.length / 2) - 1;
let end = itCompanies.length % 2 === 0 ? start + 2 : start + 1;
let middleCompanies = itCompanies.slice(start, end);
console.log(middleCompanies);
// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// Remove the middle IT company or companies from the array
start = Math.ceil(itCompanies.length / 2) - 1;
end = itCompanies.length % 2 === 0 ? start + 2 : start + 1;
itCompanies.splice(start, end - start);
console.log(itCompanies);
// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);