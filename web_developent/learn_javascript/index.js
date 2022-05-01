
//////////// VARIABLES ////////////

/*
var age = 14; // var - обьявление переменной
var firstname = "Artem";
var lastname = " P.";
var online = true;
var whatever;
const pi = 3.1415;  //const - неизменяема
let bebra = "bebra"; //let - локальная переменная, чаще используемая в функциях

var fullname = firstname + lastname;
age += 1;
whatever = "Code";

console.log("Your age is", age)
console.log("Hello,", fullname)
console.log("Are you online?", online)
console.log(whatever)
console.log("Number pi:", pi)
*/

//////////// USER INPUT ////////////

// var myName = window.prompt("What's your name?");   // делает запрос у человека
// console.log("Hello,", myName)

// document.getElementById("myButton").onclick = function(){

//   var myName = document.getElementById("myText").value;
//   console.log("Hello", myName);
// };

//////////// TYPE CONVERSION ////////////
/* chage types: 
Number(smth); 
String(smth); 
Boolean(0, "", null, underfined, NaN - false;
        1, "without empty string" - true)
*/

// var age = Number(window.prompt("Enter your age"));
// console.log("Happy birthday!")

// console.log(typeof age)
// console.log(age += 1)

//////////// FUNCTIONS ////////////

/*function sayHello(name, age){
  console.log("hello", name)
  console.log("You are", age, "years old")
};

var myAge = 14;
sayHello("Artem", myAge);*/

/*function toCelsius(f){
  return (f-32) * (5/9);
};

var myTemp = toCelsius(100);
console.log(myTemp);*/


//////////// OBJECTS ////////////
/*
var human1 = {

  name: "Rick",
  age: 45,

  eat : function(){
    console.log("Rick is eating...");
  },

  sleep : function(){
    console.log("Rick is sleeping...")
  }
};

console.log(human1);
console.log(human1.name);
console.log(human1['age']);
human1.eat();
human1.sleep();
*/

//////////// ARRAYS ////////////
/* 
var cars = ["BMW", "Audi", "Porsche"];
console.log(cars);
console.log(cars[0]);

cars.push("Tesla");  //push добавляет новый элемент списку
console.log(cars);

cars.pop(); //pop удаляет последний элемент списка
console.log(cars);

var len = cars.length;  //возвращает длину списка
console.log(len);

console.log(cars.sort());  //сортирует список по алфавиту
*/

//////////// IF STATEMENTS ////////////
/*

&& - addEventListener
|| - or

*/

/*
var age = 70;

else if (age >= 18 && age < 65){
  console.log("You're an adult!");
}

if (age >= 65 || age == 100){
  console.log("You're a senior");
}

else{
  console.log("You're a child");
}
*/

//////////// SWITCHES (ЗАМЕНА IF) ////////////
/*
var grade = 4;

if (grade == 5){
  console.log("You did it great!");
}
else if (grade == 4){
  console.log("You did it good");
}
else if (grade == 3){
  console.log("You did it okay");
}
else if (grade == 2){
  console.log("You did not do it! ");
}

================================

switch(grade){  // в скобках - проверка переменной grade
  case 5:   //если проверяемая переменная равна 5
    console.log("You did it great!");
    break;

  case 4:
    console.log("You did it good");
    break;

  case 3:
    console.log("You did it okay");
    break;

  case 2:
    console.log("You did not do it! ");
    break;

  default:  //в случае если ни один из кейсов не подошли
    console.log(grade, "is not a grade");
    break;
}
*/

//////////// WHILE LOOP ////////////
/*
var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR CREDIT CARD");

/*while (creditNum == ""){
  var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR CREDIT CARD");
}
console.log("THANK YOU! YOUR COMPUTER HAS NOT A VIRUS", creditNum)

// ============

do{
  var creditNum = window.prompt("YOUR COMPUTER HAS A VIRUS! ENTER YOUR CREDIT CARD");
}while (creditNum == "")

console.log("THANK YOU! YOUR COMPUTER HAS NOT A VIRUS", creditNum)
*/

//////////// FOR LOOPS ////////////

// for (declare index; condition; step)
/*
for (let i = 0; i < 10; i++){ //обозначение переменной > пока i < 10 > прибавлять по 1 к i
  console.log(i)
}

let letters = ["H", "E", "L", "P"]

let Car = {
  make : "Chevy",
  model: "Corvette",
  year: 2022,
  color: "blue"
}

for (let i in letters){
  console.log(letters[i])
}

for (let i in Car){
  console.log(Car[i])
}*/

//////////// NESTED LOOPS ////////////
/*
var symbol = window.prompt("Enter a symbol");
var rows = window.prompt("Enter number of rows");
var columns = window.prompt("Enter number of columns");

for (let i = 0; i < rows; i++){
  
  for (let j = 0; j < columns; j++){
    document.getElementById("myRect").innerHTML += symbol;
  }

  document.getElementById("myRect").innerHTML += "<br>";
}*/

//////////// MATH ////////////
/*
var myNum;

myNum = Math.round(3.5) //округление
myNum = Math.floor(3.9) // округление до меньшего числа
myNum = Math.ceil(3.9) // округление до большего числа
myNum = Math.pow(3, 3) // возводит число в указанную степень
myNum = Math.sqrt(9) // возвращает корень числа
myNum = Math.abs(-9) // делает из отриц. числа положительное число
myNum = Math.min(1,4,2,5,3,5) // возращает минимальное число
myNum = Math.max(1,4,2,5,3,5) // возращает максимальное число
myNum = Math.PI // возращает число пи


var a = Number(window.prompt("Enter side A"));
var b = Number(window.prompt("Enter side B"));
var c;

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

console.log("Side C =",c);
*/

//////////// RANDOM NUMBERS ////////////
/*
var randNum;

// randNum = Math.random(); //from 0 to 1
// randNum = Math.floor(Math.random() * 50); //from 0 to 50

function getRandomNum(min,max){
  return Math.floor(Math.random() * (max-min+1)+min)
}

console.log(getRandomNum(5, 30s));
*/

//////////// DATE OBJECTS ////////////
/*
date = new Date(0);
date = new Date();   //возвращает время в данный момент
date = new Date(2022, 1, 4, 18, 1, 2, 3)
let year = date.getFullYear();
console.log(date);
console.log(year);
*/

//////////// STRING METHODS ////////////

var myName = "Artem Pavlovskiy";

console.log(myName.length); //длина строки
console.log(myName.charAt(0)); //получение индекса строки, но можно myName[0]
console.log(myName.indexOf("P")); //получение индекса определенной буквы
console.log(myName.lastIndexOf("a")); //получение последнего индкса определенной буквы
console.log(myName.trim()); //убирает лишние пробелы с двух сторон
console.log(myName.toUpperCase()); //делает все буквы большими
console.log(myName.toLowerCase()); //делает все буквы маленькими
console.log(myName.slice(0, 5)); //обрезает строку



