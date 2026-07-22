/* Part 1 */
//1- A new array with the same length
//2- find()
//3- A new array containing only the matching elements
//4- undefined
//5- Arrays

/* Part 2 */
//1-false
//2-true
//3-true
//4-true
//5-false

/* Part 3 */
//Q1-forEach
//Q2-filter
//Q3-find
//Q4-map

/* Part 4 */
const fruits = ["Apple", "Banana", "Orange"];
let num = "";
//1-
for (num of fruits) {
    console.log(num);
}

//2-
for (num in fruits) {
    console.log(num);
}

//3-
fruits.forEach(number => { console.log(`${fruits.indexOf(number)} => ${number}`); });

/* part 5 */
//Q1-
const sum = (a, b) => { return a + b; };

//Q2-
const user = {
    firstName: "Mostafa",
    age: 25
};
// let(firstName, age) = user;

//Q3-
console.log(`Hello  ${name}`);

//Q4-
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

/* Part 6 */

const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

//Q1-
const sNames = students.map(item => item.name);
console.log(sNames);


//Q2-
const filterDegree = students.filter((item) => {
    return item.degree >= 60;
});
let sDegrees = [...filterDegree];

//Q3-
const findUser = students.find((item) => {
    return item.degree > 90;
});
console.log(findUser);

//Q4-
students.forEach(sName => { console.log(`student name: ${sName.name}`); });