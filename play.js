var name = 'Max';
var age = 29;
var hasHobbies = true;

age = 30;

// const summarizeUser = function summarizeUser(userName, userAge, userHasHobby){
//     return `name is ${userName}, age is ${userAge}, has hobbies ${userHasHobby}`
// }
// console.log(name, age, hasHobbies);

const summarizeUser = (userName, userAge, userHasHobby) => {

    return `name is ${userName}, age is ${userAge}, has hobbies ${userHasHobby}`
}
console.log(name, age, hasHobbies);

const add = (a,b) => {
    return a + b;
}
console.log(add(1,2));

console.log(summarizeUser(name, age, hasHobbies));

