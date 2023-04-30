
// ex1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log('Sorted Ages:', sortedAges);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);

// Find the median age
let middleIndex = Math.floor(sortedAges.length / 2);
let medianAge;
if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  medianAge = sortedAges[middleIndex];
}
console.log('Median Age:', medianAge);

// Find the average age
const sumOfAges = sortedAges.reduce((total, age) => total + age, 0);
const averageAge = sumOfAges / sortedAges.length;
console.log('Average Age:', averageAge);

// Find the range of the ages
const ageRange = maxAge - minAge;
console.log('Age Range:', ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
const diffBetweenMinAndAvg = Math.abs(minAge - averageAge);
const diffBetweenMaxAndAvg = Math.abs(maxAge - averageAge);
console.log('Diff between min and avg:', diffBetweenMinAndAvg);
console.log('Diff between max and avg:', diffBetweenMaxAndAvg);

// Slice the first ten countries from the countries array
let countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
const firstTenCountries = countries.slice(0, 10);
console.log('First ten countries:', firstTenCountries);

// ex2
countries = require('./countries');
// Find the middle country or countries in the countries array
let middleCountries = [];
middleIndex = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
  middleCountries.push(countries[middleIndex - 1], countries[middleIndex]);
} else {
  middleCountries.push(countries[middleIndex]);
}
console.log('Middle Country/Countries:', middleCountries);

// ex3
const half = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, half);
const secondHalf = countries.slice(-half);

console.log(firstHalf);
console.log(secondHalf);