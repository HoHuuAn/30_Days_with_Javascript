// ex1
let age = prompt("Enter your age:")
Number(age) > 18
? console.log("You are old enough to drive.")
: console.log(`You are left with ${18-Number(age)} years to drive.`)

// ex2
Number(age) > 20
? console.log(`You are ${Number(age) - 20} years older than me.`)
: console.log(`You are ${20 - Number(age)} years younger than me.`)

// ex3
let a = 4
let b = 3
a > b
? console.log(`4 is greater than 3`)
: console.log(`4 is smaller than 3`)

// ex4
Number(age) % 2 == 0
? console.log(`${Number(age)} is an even number.`)
: console.log(`${Number(age)} is an odd number.`)

