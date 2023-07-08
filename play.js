// var name = 'Max';
// var age = 29;
// var hasHobbies = true;
//
// age = 30;
//
// // const summarizeUser = function summarizeUser(userName, userAge, userHasHobby){
// //     return `name is ${userName}, age is ${userAge}, has hobbies ${userHasHobby}`
// // }
// // console.log(name, age, hasHobbies);
//
// const summarizeUser = (userName, userAge, userHasHobby) => {
//
//     return `name is ${userName}, age is ${userAge}, has hobbies ${userHasHobby}`
// }
// console.log(name, age, hasHobbies);
//
// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(1,2));
//
// console.log(summarizeUser(name, age, hasHobbies));
//
// const person = {
//     name: 'Max',
//     age: 29,
//     greet(){
//         console.log('Hi, I am ' + this.name);
//     }
// };
// // person.greet();
// // console.log(person);
//
// const printName = (person) => {
//     console.log(person.name);
// }
// printName(person);
//
// const {name, age} = person;
// console.log(name, age);
//
// const printName2 = ({name}) => {
//     console.log(name);
// }
// printName2(person);
//
// const copiedPerson = {...person};
// console.log(copiedPerson);
//
// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);
// // for (let hobby of hobbies){
// //     console.log(hobby);
// // }
// // console.log(hobbies.map( hobby => {
// //     return 'Hobby: ' + hobby
// // }));
// // console.log(hobbies);
// // hobbies.push('Programming');
// // console.log(hobbies);
//
// const copiedArray = [...hobbies];
// console.log(copiedArray);
//
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// }
// console.log(toArray(1,2,3));

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout (() => {
//             callback('Done');
//         }, 1500);
//     });
//     return promise;
// }
//
// setTimeout(() => {
//     console.log('Timer is done');
//     fetchData().then(text => {
//         console.log(text);
//         fetchData().then(text2 => {
//             return fetchData();
//         })
//             .then(text2 => {
//                 console.log(text2);
//             })
//     });
// }, 1);
//
// console.log('Hello!');
// console.log('Hi!');


