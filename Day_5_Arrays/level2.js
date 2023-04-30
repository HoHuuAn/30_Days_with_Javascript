const countries = require('./countries');
const webTechs = require('./web_techs');
// ex2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let cleanedText = text.replace(/[^\w\s]/gi, '');
let words = cleanedText.split(/\s+/);
console.log(words);
console.log(words.length);

//ex3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// Add 'Meat' to the beginning of the shopping cart if it's not already there
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
// Add 'Sugar' to the end of the shopping cart if it's not already there
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
// Remove 'Honey' from the shopping cart if you're allergic to it
if (shoppingCart.includes('Honey')) {
    const index = shoppingCart.indexOf('Honey');
    shoppingCart.splice(index, 1);
}
// Modify 'Tea' to 'Green Tea'
if (shoppingCart.includes('Tea')) {
    const index = shoppingCart.indexOf('Tea');
    shoppingCart[index] = 'Green Tea';
}
console.log(shoppingCart);

// ex4
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    // Add 'Ethiopia' to the countries array if it doesn't exist
    countries.push('Ethiopia');
}

// ex5
// Check if 'Sass' exists in the webTechs array
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    // Add 'Sass' to the webTechs array if it doesn't exist
    webTechs.push('Sass');
    console.log(webTechs);
}

//ex6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd)
console.log(fullStack)