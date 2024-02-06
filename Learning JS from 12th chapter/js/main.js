// //Continue (Loops)..

// let text = '';
// for (let i=0; i<10; i++){
//     if (i===3){
//         continue;
//     }
//     text = text + i;
// }

// console.log(text);

// //Functions:

// function sum(num1,num2){
//     return num1+num2;
// }

// console.log(sum(14,10))

// function sum (num1,num2){
//     console.log(num1);
//     console.log(num2)
//     if (num2 === undefined){
//         return num1+num1;
//     }
//     return num1+num2;
// }

// console.log(sum(10))

// function getUserNameFromEmail(email){
//     return(email.slice(0,email.indexOf("@")));
// }

// console.log(getUserNameFromEmail("deepanyogeeshwaran@gmail.com"));

//topropercase

// function toProperCase(name){
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// }

// console.log(toProperCase("deepanCHAKKARAvarthy"))

// //Scope (let,var,const).........
// //Global Scope.
// var x=2;
// let y=3;
// const z=5;

// //Loacal Scope.//Block Scope
// {
// let y=4;
// console.log(y);
// }
// //Local Scope.//Function Scope.

// function myFun(){
//     const z=7;
// }
// myFun
// console.log(z);

//Array...

// myArray = [];
//adding element

// myArray[0] = "Deepan";
// myArray[1] = "Selected";
// myArray[2] = 675;
// myArray[3] = true;

// console.log(myArray);
// console.log(myArray[2]);
// console.log(myArray.length);
// console.log(myArray[myArray.length-1]);

// myArray.push("join");
// myArray.unshift("click");
// myArray.shift();
// myArray.pop();
// console.log(myArray);

// const lastItem = myArray.push("Anandh");
// console.log(lastItem);

// myArray.splice(2,1);
// console.log(myArray);

// const newArray = myArray.slice(1,4);
// console.log(myArray);
// console.log(newArray);

// const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);

// myArray = [];

// myArray[0] = "Deepan";
// myArray[1] = "Selected";
// myArray[2] = 675;
// myArray[3] = true;

// myArrayS = ["react", 77, 987];
// console.log(myArrayS);

//concat - we can add 2set of arrays together.

// let newArray = myArray.concat(myArrayS);
// console.log(newArray)

// let newArray = [...myArray,...myArrayS];
// console.log(newArray)

//Mulidimentional Arrays........................................................//

// const earnMoneyA = ["Frontend","Backend","Fullstack"];
// const earnMoneyB = ["AI", "Blockhchain","DataAnalyst"];
// const growMoneyA = ["Stocks","Realestates","FixedIncomes"];
// const growMoneyB = ["Options","Futures"];
// const giveMoney = ["QualityEducation"];

// console.log(earnMoneyA[2],growMoneyB[1]);

// const earnMoney = [earnMoneyA,earnMoneyB];
// const growMoney = [growMoneyA,growMoneyB];

// console.log(earnMoney[0][1],growMoney[1][1]);

// const learning = [earnMoney,growMoney,giveMoney];

// console.log(learning[1][0][0])

// // Rock, Paper, Scissors: Refactored with While Loop and an Array
// let playGame = confirm("Shall we play rock, paper, or scissors?");
// if (playGame) {
//   //play
//   while (playGame) {
//     const playerChoice = prompt("Please enter rock, paper, or scissors.");
//     if (playerChoice || playerChoice === "") {
//       const playerOne = playerChoice.trim().toLowerCase();
//       if (
//         playerOne === "rock" ||
//         playerOne === "paper" ||
//         playerOne === "scissors"
//       ) {
//         const computerChoice = Math.floor(Math.random() * 3);
//         const rpsArray = ["rock", "paper", "scissors"];
//         const computer = rpsArray[computerChoice];

//         const result =
//           playerOne === computer
//             ? "Tie game!"
//             : playerOne === "rock" && computer === "paper"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "paper" && computer === "scissors"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : playerOne === "scissors" && computer === "rock"
//             ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
//             : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
//         alert(result);
//         playGame = confirm("Play Again?");
//         if (!playGame) alert("Ok, thanks for playing.");
//         continue;
//       } else {
//         alert("You didn't enter rock, paper, or scissors.");
//         continue;
//       }
//     } else {
//       alert("I guess you changed your mind. Maybe next time.");
//       break;
//     }
//   }
// } else {
//   alert("Ok, maybe next time.");
// }

//Objects........................................//////////////////////////
//Key-Value pairs in curly braces......//////////////////////////

// const myObj = {name:"Deepan"};

// console.log(myObj);

// const anotherObj = {
//     subscriber:true,
//     no:1000,
//     content:{
//         earn:"JS",
//         grow:"Stocks"
//     },
//     sub:["Earn","Grow","Give"],
//     action: function(){
//         return "Hello World";
//     }
// };

// console.log(anotherObj.action())

// const anotherObj = {
//     subscriber:true,
//     no:1000,
//     content:{
//         earn:"JS",
//         grow:"Stocks"
//     },
//     sub:["Earn","Grow","Give"],
//     action: function(){
//         return `Earn Money by Using ${this.content.grow}`;
//     }
// };

// console.log(anotherObj.action())

//Inheritance of the Objects..................../////////////////////////////

// const vehicle = {
//     door:2,
//     engine: function() {
//         return "Vroomm!";
//     }
// }

// console.log(vehicle.engine());

// const car = Object.create(vehicle);
// car.wheels = 4;

// car.engine = function(){
//     return "Woosh!"
// }
// console.log(car.engine());

// const tesla = Object.create(car);

// console.log(tesla.door)

// //Another Example of Object.................///////////////////////////

// const movie = {
//     Actor:"Kavin",
//     Director:"Karthick Subburaj",
//     Music:"yuvan",
//     Producer:"Krisna"
// };
// movie.actress = "Hansika";
// console.log(Object.keys(movie));

// //For In Loops by using Objects..................//////////////////////////

// for (let jobs in movie){
//     console.log(movie[jobs])
// }

// for (let job in movie){
//     console.log(`${job} it's ${movie[job]}`)
// }

// //Destructuring the Objects.............///////////////////
// const {Director:myFavDir} = movie;
// console.log(myFavDir);

// function sings({Producer}){return Producer}

// console.log(sings(movie))

//Classes...............................///////////////////////////////

// const myPizza = {
//     size:"medium",
//     crust:"original",
//     bake: function(){
//         return console.log(`Baking a ${this.size} ${this.crust} crust Pizza`)
//     }
// }

// myPizza.bake();

// class Pizza {
//     constructor (typePizza, typesize, typecrust){
//         this.type = typePizza
//         this.size = typesize,
//         this.crust = typecrust,
//         this.toppings = []
//     }
//     getToppings(){
//         return this.toppings;
//     }
//     setToppings(toppingsPizza){
//         this.toppings.push(toppingsPizza);
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust Pizza ${this.toppings}`)
//     }
// }

// const anotherPizza = new Pizza("Margirita","medium", "Original");
// anotherPizza.bake();

// const anPizza = new Pizza("Pepperonion","Large","Original")
// anPizza.bake();

// const myPizza = new Pizza("margarita","Small","Thin");
// myPizza.setToppings("egg");
// console.log(myPizza.toppings)
// myPizza.bake();

//ChildClass Using extends(keyword)................./////////////////////////////

// class Pizza {
//     constructor ( typesize ){
//         this.size = typesize,
//         this.crust = "Original"
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crustPizza){
//         this.crust = crustPizza;
//     }
// }

// class specialPizza extends Pizza{
//     constructor (sizePizza) {
//         super(sizePizza);
//         this.type = "Margarita"
//     }
//     slice(){
//         console.log(`Our ${this.type} ${this.size} Pizza has 8 slices`)
//     }
// }

// const mySpecialPizza = new specialPizza("Medium");
// mySpecialPizza.slice()

// class Pizza {
//     crust = "Original";
//     #sauce = "Tomato";
//     constructor ( sizePizza ){
//         this.size = sizePizza
//     }
//     getCrust(){
//         return this.crust;
//     }
//     setCrust(crustPizza){
//         this.crust = crustPizza;
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} Pizza` ) 
//     }
// }

// const myPizza = new Pizza("Medium");
// myPizza.bake()
// console.log(myPizza.crust)

//JSON - Java Script Object Notation............//////////////////
// const myObj = {
//     name: "Deepan",
//     content: ["Earn","Trip","Enjoy"],
//     sub: function(){
//         console.log("Thanks for joining with us")
//     }
// };
// console.log(myObj);
// console.log(myObj.content);
// myObj.sub()

// const sendJSON = JSON.stringify(myObj);
// console.log(sendJSON)
// console.log(sendJSON.name);

// const receiveJSON = JSON.parse(sendJSON);
// console.log(receiveJSON);

//Errors and Erros Handling..........................///////////////////////////////

// "use strict"

// const variable = "Fluctuating";
// console.log(variable);

// variable = "Underwriting";

// const makeerror = () =>{
//     try{
//         const name = "Deepan"
//         name = "Balaji"
//     }catch(err){
//         console.log(err);
//     }
// }

// makeerror();

// const makeerror = () =>{
//     try{
//         throw new customError("This is Custom Error")  // throw new is a key word
//     }catch(err){
//         console.error(err.stack);
//     }
// }

// makeerror();

// function customError (message){
//     this.message = message;
//     this.name = "Custome Error";
//     this.stack = `${this.name} : ${this.message}`
// }
