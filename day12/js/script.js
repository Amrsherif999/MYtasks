/*  JS basic */

/* JS has auto data type detect */

var option_1 = "it is a text written by Amr Sherif";
console.log(option_1); //text

var option_2 = 20;
console.log(option_2); // number. (integr or float)

var option_3 = true;
console.log(option_3); // boolean. (true or false)

var option_4;
console.log(option_4);// undefined because i did not initialize it by a value

var option_5 = null;
console.log(option_5);// NULL
/* all of this data are Primitive data type  */


/* ? how can we display information */
window.alert("welcome to my website"); // it is a massage that display in the alert box
console.log("welcome to the console"); // it is a massage or information that display in console field
console.warn("Warning Message") //Warn Message

/* types of display*/
console.log("my age=" + option_2); //String Concatenation and it is an old way
console.log(`my age= ${option_2}`);//Template Literal and it is a better way

/* Mathematical Operations and Arithmetic Operators + - / * ++ -- % sqrt parseInt */

var num1 = 20; //integr number
var num2 = 10.5;// float number

var result = num1 + num2;
console.log(`sum= ${result}`);// sum of num1+num2=20+10.5=30.5 float

var result = num1 - num2;
console.log(`sub= ${result}`);// subtract of num1-num2=20-10.5=9.5 float

var result = num1 / num2;
console.log(`div= ${result}`);// division of num1/num2=20/10.5=1.904 float

var result = num1 * num2;
console.log(`mult= ${result}`);// multiplction of num1*num2=20*10.5=210 integr

var result = ++num1; //it means increment 
console.log(`inc= ${result}`);// 1 + num1 = 20+1=21 integr

var result = --num1; //it means decrement 
console.log(`dec= ${result}`);// 1 + num1 = 21-1 =20  integr because it num1 is overriden by increment

var result = num1 % num2; // modulus
console.log(`mod= ${result}`);// 20%10.5=9.5

var result = Math.sqrt(num1);
console.log(`sqrt= ${result}`);// square root of num1 =  4.47 float

var result = parseInt("20"); //convert string into number
console.log(`convert= ${result}`);


/* Comparison Operators > , < , >= , <= , != , == , === 
and the Control of Flow if , else if , else
and Logical Operators and=&& , or=|| , not=!     */

var age_1 = 15;
var age_2 = 40;

if (age_1 >= 18 && age_2 >= 18) { //if the two ages are grater than 18 at the same time then they can has a license
    console.log("both can has car license");  //one of two conditons is wrong so it is false
} else if (age_1 <= 18 || age_2 >= 18) { //if one age is true he can get license 
    console.log("age2 can has a car license");
} else if (age_1 === age_2 && age_1 > 18) { //if tthe two ages are equal and grater than 18 they can have licens
    console.log("both can has car license");
} else {
    console.log("enter a valid age");  //if user entred a flase number by mistake like 1000 or -10
}

/* Loops for , while */
console.log("for loop");

//  start     end     increase rate
for (var i = 1; i <= 10; i++) {//it will count from 1 to 10 and stope
    console.log(`number: ${i}`);
}

console.log("while loop");
var i = 1;
while (i <= 10) {//it will count from 1 3 5 7 9  and stope because it increase by 2 not 1
    console.log(`num: ${i}`);
    i += 2;
}


/* Function */
function sum(num1, num2) {//Declared Function
    var result = num1 + num2;
    console.log(`sum= ${result}`);
}
sum(20, 10);

function sub(num1, num2) {//Return Function
    return num1 - num2;
}
console.log(`sub= ${sub(20, 10)}`);

const mult = (num1, num2) => num1 * num2; //Arrow Function
console.log(`mult= ${mult(10, 5)}`);

function getAvg(num1, num2) {// self invoked function
    var avg = (num1 + num2) / 2
    console.log(`avg= ${avg}`);
}
getAvg(30, 20);

/* Hoisting
   it mean moving the declaration of functions, variables, classes,
   or imports to the top of their scope, prior to execution of the code.
*/

 function test() {
     console.log(`Amr`);    //2
     console.log(`Sherif`); //3
     var num1 = 20;        //1 //4
     console.log(`hoistiong= ${num1}`) //5
 }
 test();
/* hoistiong
function test() {
    var num1;
    console.log(`Amr`);
    console.log(`Sherif`);
    num1 = 20;
    console.log(num1);
} */

    //another ex
  function test1() {
     console.log(`Amr`); //3  
     var num1=5; //1 //4
     console.log(`Sherif`);//4
     var num2 = 20; //2  //5 
     console.log(`hoistiong= ${num1} ${num2}`) //6
 }
 test();
/* hoistiong
function test1() {
    var num1;
    var num2;
    console.log(`Amr`);
    num1 = 5;
    console.log(`Sherif`);
    num1 = 20;
    console.log(num1,num2);
} */


/* object */  //objects are many data types used to store key value in it.

const person ={
    fullname: "Amr Sherif",
    age: 20,
    gender: "male",
    job: "Dev",
    salary: 10000,
    PC: {
        CPU: "Intel",
        GPU: "AMD",
        RAM: "16GB"
    },
    gaming: function (game) {
        console.log(`Amr is playing ${game}`);
    }
};
console.table(person); //to display in table form
Object.values(person).forEach(value => {console.log(value);});//to display all data at once 
