// Ex1
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 70 && score <= 89) {
        return "B";
    } else if (score >= 60 && score <= 69) {
        return "C";
    } else if (score >= 50 && score <= 59) {
        return "D";
    } else if (score >= 0 && score <= 49) {
        return "F";
    } else {
        return "Invalid score";
    }
}

console.log(getGrade(85));
console.log(getGrade(73));
console.log(getGrade(65)); 
console.log(getGrade(55)); 
console.log(getGrade(30)); 
console.log(getGrade(120)); 

// Ex2
const month = prompt("Enter a month:");
switch (month.toLowerCase()) {
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn.");
        break;

    case "december":
    case "january":
    case "february":
        console.log("The season is Winter.");
        break;

    case "march":
    case "april":
    case "may":
        console.log("The season is Spring.");
        break;

    case "june":
    case "july":
    case "august":
        console.log("The season is Summer.");
        break;

    default:
        console.log("Invalid input.");
        break;
}