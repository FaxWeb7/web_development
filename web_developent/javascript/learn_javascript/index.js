
//////////// VARIABLES ////////////

/*
var age = 14; // var - обьявление переменной
var firstname = "Artem";
var lastname = " P.";
var online = true;
var whatever;
const pi = 3.1415;  //const - неизменяема
let bebra = "bebra"; //let - локальная переменная, чаще используемая в функциях
                    let = declare variables with a function scoped ()
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
/*
var myName = "Artem Pavlovskiy";

console.log(myName.length); //длина строки
console.log(myName.charAt(0)); //получение индекса строки, но можно myName[0]
console.log(myName.indexOf("P")); //получение индекса определенной буквы
console.log(myName.lastIndexOf("a")); //получение последнего индкса определенной буквы
console.log(myName.trim()); //убирает лишние пробелы с двух сторон
console.log(myName.toUpperCase()); //делает все буквы большими
console.log(myName.toLowerCase()); //делает все буквы маленькими
console.log(myName.slice(0, 5)); //обрезает строку

var myStreet = "123 Fake St.";
var myCity = "Moscow";
console.log(myStreet.concat(", ", myCity))  //совмещает несколько слов

var phone = "123-45-67";
console.log(phone.replaceAll("-", ""))  //замена сиимволов
*/

//////////// METHOD CHAINING ////////////
/*
let user = "artem";
console.log(user[0].toUpperCase() + user.slice(1))
*/

//////////// BREAK & CONTINUE ////////////

//break = used to exit out of a loop
//continue = skips one iteration of a loop and continue loop
/*
for (let i = 1; i <= 20; i++){
  if (i == 13){
    continue;
  }
  console.log(i)
}*/

//////////// VAR vs LET ////////////

// let = declare variables with a block scoped {}         (local variable)
// var = declare variables with a function scoped ()     (global variable)
/*
for (let i = 1; i <= 3; i++){
  console.log(i)
}

//console.log(i)  //return mistake
*/

//////////// ARRAY.FOREACH() ////////////

//forEach() = perfoms a function for every element in array
/*
let total = 0;
let cart = [5, 6, 7, 8, 9];

function checkout(element){
  total += element
}

cart.forEach(checkout);
console.log(total)*/

//////////// ARRAY.MAP() ////////////

// perfoms a function for every element in array, then stores the returned values in a new array
/*
let storeUSD = [5,6,7,8,9];

function toEUR(value){
  value *= 0.85
  return value
}

let storeEUR = storeUSD.map(toEUR)
console.log(storeEUR)
*/

//////////// ARRAY.FILTER() ////////////

// filter = применяет определенную функцию к списку, тем самым фильтруя этот список
/*
let students = [16, 17, 18, 19, 20];

function checkAge(age){
  if (age >= 18){
    return age;
  }
}

let adultStudent = students.filter(checkAge);
console.log(adultStudent)
*/

//////////// ARRAY.REDUCE() ////////////
/*
let letters = ["H", "E", "L", "P"];

function combineLetters(total, nextLetter){
  return total + nextLetter;
}

let word = letters.reduce(combineLetters);
console.log(word);
*/

//////////// CALLBACKS ////////////

// callback = function passed as an argument to another function.
/*
let message;

function displayConsole(output){
  console.log(output);
}

function setMessage(text, callBack){
  message = text;
  callBack(message)
}

setMessage("Hi!", displayConsole);

*/

//////////// FUNCTION EXPRESSIONS ////////////

/*
//******* function declaration ******
sayHello();
function sayHello(){
  console.log("Hello");
}
//*******

//******* function expression *******
let greeting = function(){console.log("Hello")};
greeting();
//*******
*/

//////////// NESTED FUNCTIONS ////////////

// nested functions = functions inside other functions
/*
function login(){
  let username = "Artem";
  let userInbox = 0;

  function displayUserName(){
    console.log("Hello", username)
  }

  function displayInbox(){
    console.log("You have", userInbox, "new messages");
  }

  displayUserName();
  displayInbox();
}

login();*/

//////////// ANONYMOUS FUNCTIONS ////////////

// anonymous function = function without a name
/*
(function(){
  document.getElementById("myH1").innerHTML = "HEY!";
})();

let task = function(){document.getElementById("myH1").innerHTML = "sup!";}

// setTimeout(function, milliseconds) //после выполнения анонимной функции через указанное время выполнится указаннная функция
setTimeout(task, 1000)
*/

//////////// CLOSURES ////////////

// closures = a function with saved data
/*
let score = function(){
  let points = 0;

  return function(){
    points += 1;
    return points;
  }
}();

console.log(score());
console.log(score());
console.log(score());
*/

//////////// CLOSURE EXAMPLE ////////////
/*
function makeSize(size){
  return function(){
    document.body.style.fontSize = size + "px";
  }
}

let size30 = makeSize(30);
size30()
*/

//////////// ARROW FUNCTIONS ////////////

// arrow function => shortcut for a function expression
/*
let hello;
let x = "Yo";
let y = "Artem";

//function expression
hello = function(x, y){
  return x + ", Hello world " + y
}
console.log(hello(x, y));

//arrow function
// 0 or 2+ params = ()
// 1 param = param
hello = () => x + ", Hello world";
hello = x => x + ", Hello world";
hello = (x, y) => x + ", Hello world " + y;
console.log(hello(x,y));
*/

// ---------------------------

/*
let hello;
let x = "Yo";
let y = "Artem";

hello = function(x, y){
  console.log(x);
  console.log(y);
}
hello(x, y);

hello = (x, y) => {
  console.log(x); 
  console.log(y);
};
hello(x,y);
*/

// ----------------------
/*
let storeUSD = [5,6,7,8,9];
let storeEUR;

storeEUR = storeUSD.map(value => value *= 0.85)
console.log(storeEUR)
*/

// -----------------------
/*
let students = [16, 17, 18, 19, 20];

let adultStudent = students.filter(age => {if (age >= 18){return age}});
console.log(adultStudent)
*/
// ----------------
/*
let letters = ["H", "E", "L", "P"];

let word = letters.reduce((total, nextletter) => total + nextletter);
console.log(word);
*/

//////////// CLASSES ////////////
/*
class Car{

  drive(){
    console.log("You drive the car");
  }

  brake(){
    console.log("You step on the brakes!");
  }
}

let car1 = new Car();
let car2 = new Car();

car1.drive();
car2.brake();
*/
//////////// CONSTRUCTORS ////////////

// constructor = like __init__ in python.
/*
class Car{

  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive(){
    console.log("You drive the car");
  }

  brake(){
    console.log("You step on the brakes!");
  }
}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

console.log(car1.model);
console.log(car2.model);
*/

//////////// this KEYWORD ////////////
/*
class Car{

  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive(){
    console.log("You drive the", this.make);
  }

  brake(){
    console.log("You step on the brakes!");
  }

  whatIsThis(){
    return console.log(this);
    // return console.log(this.make, this.model)
  }
}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

car1.drive();
console.log(car2.model);

car1.whatIsThis()*/

//////////// static KEYWORD ////////////

// static = a method or property that belongs to a class and not any one object
// static-переменные или функции можно вызывать тольео через класс, а не через обЬект класса

/*
class Car{

  static numberOfCars = 0;

  static beginRace(){
    console.log("Race has begun!")
  }

  constructor(model){
    this.model = model;
    Car.numberOfCars += 1;
  }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("BMW");

console.log(Car.numberOfCars)
Car.beginRace()
*/

//////////// INHERITANCE ////////////

/*
class Animal{
  constructor(){
    this.alive = true;
  }
  eat(){
    console.log("This animal is eating...");
  }
}

class Rabbit extends Animal{     //extends = наследование класса
  run(){
    console.log("This rabbit is running")
  }
}
class Fish extends Animal{
  swim(){
    console.log("This fish is swimming")
  }
}

let rabbit = new Rabbit();
let fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
fish.swim();
*/

//////////// METHOD OVERRIDING ////////////
/*
class Vehicle{
  drive(){
    console.log("You drive the vehicle");
  }
}

class Car extends Vehicle{
  drive(){
    console.log("You drive the car");
  }
}

class RaceCar extends Vehicle{
  drive(){
    console.log("You drive the racecar");
  }
}

let car = new Car();
let racecar = new RaceCar();

car.drive();
racecar.drive();
*/

//////////// super keyword ////////////

// super = reference to the parent class. can use to methods, constructor
/*
class Person{

  constructor(name, age, gpa){
    this.name = name;
    this.age = age;
  }

  welcome(){
    console.log("Hello", this.name + ", you are", this.age, "years old");
  }
}

class Student extends Person{

  constructor(name, age, gpa){
    super(name, age);  // наследует значения name и age от Person
    this.gpa = gpa;
  }
  
  hello(){
    super.welcome();     // наследует функцию hello от Person
    console.log("Your gpa is", this.gpa)
  }
}

class Teacher extends Person{

  constructor(name, age, classSize){
    super(name, age);   // наследует значения name и age от Person
    this.classSize = classSize;
  }
  
  hello(){
    super.welcome();     // наследует функцию hello от Person
    console.log("Your class size is", this.classSize)
  }
}

let student = new Student("Artem", 14, 4.67);
let teacher = new Teacher("Andrew", 45, 30);

console.log(student.name)
console.log(teacher.age)

student.hello();
teacher.hello();
*/

//////////// objects as arguments ////////////
/*
class Car{

  constructor(model, color){
    this.model = model;
    this.color = color;
  }
}

function changeColor(car, newColor){
  car.color = newColor;
}

let car1 = new Car("Corvette", "blue");
let car2 = new Car("BMW", "red");

changeColor(car1, "black");
changeColor(car2, "pink");

console.log(car1.model, car1.color);
console.log(car2.model, car2.color);
*/

//////////// ARRAY OF OBJECTS ////////////

/*
class Car{
  constructor(model, color){
    this.model = model;
    this.color = color;
  }

  drive (){
    console.log("You are driving the", this.model)
  }
}

let garage = [];

car1 = new Car("Corvette", "blue");
car2 = new Car("Mustang", "red");
car3 = new Car("Tesla", "black");

garage = [car1, car2, car3];

console.log(garage[0].color)

for (let i in garage){
  garage[i].drive()
}
*/

//////////// ARRAY OF FUNCTIONS ////////////
/*
function jump(){
  console.log("You jump");
}

function punch(){
  console.log("You punch");
}

function kick(){
  console.log("You kick");
}

function block(){
  console.log("You block");
}

actions = [jump, punch, kick, block]

actions.forEach(element => {element();});
*/

//////////// GETTERS AND SETTERS ////////////

// set = for variables
// get = for functions
/*
class User {

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set first(value){
    this.firstName = value;
  }

  set last(value){
    this.lastName = value;
  }

  get fullName(){
    console.log(this.firstName, this.lastName);
  }
}

let user1 = new User("Artem", "P.")
let user2 = new User("Patrick", "star")

user1.fullName;
user2.fullName;
*/

//////////// TEMPLATE LITERALS ////////////

/// template literals = another way of formatting output
/// `{smth}`    !!!!БУКВА Ё, а не кавычки
/*
let firstName = "Artem";
let lastName = "P.";
let price = 10;
let taxRate = 0.05;
let total;

console.log(`Hello, ${firstName} ${lastName} ! ?s`);
console.log(`The price is: $${price}`);
console.log(`The tax rate is: ${taxRate}`);
console.log(`Tax is: $${price * taxRate}`);
console.log(`Total is: $${total = price + (price * taxRate)}`);
*/

//////////// ADD HTML ELEMENTS ////////////

/* Create HTML elements
h1.innerHTML (vulnerable to XSS attacks)
h1.innerText (better)

h1.innerHTML = "<u>Hello world</u>";  //innerHTML add text with html code
h1.innerText = "<u>Hello world</u>";  //innerText add only text
*/
/*
const h1 = document.createElement("h1");
const underline = document.createElement("u")
underline.innerText = "Hello world";
h1.append(underline)
document.body.append(h1);

const h2 = document.createElement("h2");
const Italic = document.createElement("i");
Italic.innerText = "How are you?";
h2.append(Italic);
document.body.append(h2);
*/

//////////// modify HTML ELEMENTS ////////////

//document.getElementById() (older)
//document.querySelector() (more powerful, newer)
/*
document.querySelector("#myBtn").onclick = function(){
  const h1 = document.querySelector("#myH1");
  const underline = document.createElement("u");
  const button = document.querySelector("#myBtn");
  underline.innerText = "Bye world";
  h1.innerText = "";
  h1.append(underline);

  const p = document.querySelectorAll(".myP");
  // p[0].innerText = "WOOOOOOOW";
  // p[1].innerText = "Sup!";
  p.forEach(element => element.innerText = "Whoa!");
  button.remove();
}
*/

//////////// CHANGE CSS PROPERIES ////////////
/*
document.querySelector("#myBtn").onclick = function(){
  const h1 = document.querySelector("#myH1");

  console.log(h1.style);

  h1.style.color = "#00FF00";
  h1.style.backgroundColor = "black";
  h1.style.fontFamily = "consolas";
  h1.style.textAlign = "center";
  h1.style.border = "5px solid #00FF00"
}
*/

//////////// MOUSE EVENTS ////////////

//element.addEventListener(type, function);

const div = document.querySelector("#myDiv")

div.style.backgroundColor = "grey";
div.style.width = "200px";
div.style.height = "200px";
/*
div.addEventListener("click", e => {  //нажатие мышки
  console.log("You clicked the mouse");
  div.style.backgroundColor = "red";
})*/
/*
div.addEventListener("mousedown", e => {  //зажатие мышки
  console.log("You are holding the mouse down");
  div.style.backgroundColor = "yellow";
})

div.addEventListener("mouseup", e => {  //отзажатие мышки
  console.log("You let go of the mouse down");
  div.style.backgroundColor = "grey";
})

div.addEventListener("dblclick", e => { //двойной клик
  console.log("You doubleclicked");
  div.style.backgroundColor = "purple";
})
*/

div.addEventListener("contextmenu", e => {   //ПКМ
  console.log("You opened the context menu");
})

div.addEventListener("mouseover", e => {  //при наведении
  console.log("You entered the square!");
  div.style.backgroundColor = "green";
})

div.addEventListener("mouseleave", e => {  //при отведении
  console.log("You left the square!");
  div.style.backgroundColor = "pink";
})

div.addEventListener("mousemove", e => {  ////при наведении много раз
  console.log("You are within the square!");
})























