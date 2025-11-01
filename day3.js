// function return new functions

// function greet(greeting) {
//     return function person(fullName){
//         return `${greeting} ${fullName}`
//     }
// }

// const greet = greeting => fullName => `${greeting} ${fullName}`

// console.log(greet("hey")("geeth"));


// this keyword and apply, call, bind methods

// const lufthansa = {
//     flight: "Lufthansa",
//     iataCode: "LH",
//     bookings: [],
//     book (flightNum, name) {
//         console.log(`${name} booked a seat on ${this.flight} flight ${this.iataCode}${flightNum}`)
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }
// lufthansa.book(678, "geeth")
// console.log(lufthansa)

// const euroWings = {
//     flight: "Euro Wings",
//     iataCode: "EW",
//     bookings: []
// }
// euroWings.book = lufthansa.book
// euroWings.book(354, "Mahesh Batt")
// console.log(euroWings);

// const book = lufthansa.book
// console.log(book());

// call method
// book.call(euroWings, 768, "Harshad Mehta")
// book.call(lufthansa, 567, "Nidhi Patnaik")
// console.log(euroWings, lufthansa);


// apply method
// let personData = [987, "Pawan Kalyan"]
// book.apply(lufthansa, personData)

// book.call(lufthansa, ...personData)
// console.log(lufthansa);


// bind method
// let bookLH = book.bind(lufthansa, 678)
// bookLH("Deepika Padukone")
// bookLH("Ranveer Singh")


// const addVAT = function(rate) {
//     return addTax = (value) => {
//         return value + value * rate
//     } 
// }

// let indiaVAT = addVAT(0.18)
// console.log(indiaVAT(900));


// CHALLENGE - 1

/*
Let's build a simple poll app! 
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below. 
Your tasks: 
1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things: 
1.1. Display a prompt window for the user to input the number of the 
selected option. The prompt should look like this: 
What is your favourite programming language? 
0: JavaScript 
1: Python 
2: Rust 
3: C++ 
(Write option number) 
1.2.  Based on the input number, update the 'answers' array property. For 
example, if the option is 3, increase the value at position 3 of the array by 
1. Make sure to check if the input is a number and if the number makes 
sense (e.g. answer 52 wouldn't make sense, right?) 
2. Call this method whenever the user clicks the "Answer poll" button. 
3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string' 
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".  
4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call. 
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation? 
20 
The Complete JavaScript Course 
Test data for bonus:  
 Data 1: [5, 2, 3] 
 Data 2: [1, 5, 3, 9, 6, 1] 
Hints: Use many of the tools you learned about in this and the last section
*/

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         let answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
//         answer >= 0 && answer <= 3 ? (this.answers[answer]++, this.displayResults()) : alert("Please choose valid option...")
//         console.log(answer, this.answers);
//     },
//     displayResults(){
//         let type = prompt("Choose one: 'String' or 'Array'", "array").toLowerCase()
//         if(type === "string") return alert(`Poll results are ${this.answers.join(",")}`)
//         else if(type === "array") return alert(this.answers)
//     }
// }

// document.getElementById("answerPoll").addEventListener("click", poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');


// Immediately Invoked Function Expressions

// (function(){
//     console.log("Nice to meet you!!!");
// })();

// // (() => console.log("Pleasure to have you here"))();

// (function() {
//     console.log("Would you like to have some water?");
// })()

// CLOSURES

// function outer1() {
//     let count = 0
//   return function inner() {
//     count++
//     console.log(count);
//   };
// }

// const greet1 = outer1(); 
// greet1(); 
// greet1(); 
// greet1(); 


// function outer2() {
//     let name = "likhi"
//   return function inner() {
//     console.log(`hello ${name}`);
//   };
// }

// const greet2 = outer2(); 
// greet2(); // "Hello!"
// greet2(); // "Hello!"
// greet2("likhu"); // "Hello!"


// CHALLENGE - 2

/*
This is more of a thinking challenge than a coding challenge 
�
� 
Your tasks: 
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again! 
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example.
*/

// (function () { 
// const header = document.querySelector('h1'); 
// header.style.color = 'red'; 
// header.addEventListener("click", function(){
//     this.style.color = "blue"
// })
// })();


// Write higher-order function to filter students/users

// const users = [
//   { name: "Gana", age: 24, isStudent: true },
//   { name: "Raj", age: 28, isStudent: false },
//   { name: "Sara", age: 22, isStudent: true },
//   { name: "Vikram", age: 30, isStudent: false },
// ];

// function filterUsers(users, callback) {
//   const result = []
//   for(let user of users) {
//     if(callback(user)) result.push(user)
//   }
//   console.log(result);
// }

// filterUsers(users, user => user.age > 25)
// filterUsers(users, user => user.isStudent)

