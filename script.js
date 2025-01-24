// let gameNum = 25;
// let userNum = prompt("Guess The Game Number: ");

// while (userNum != gameNum) {
//   userNum = prompt("You Entered The Wrong Number. Try Again: ");
// }
// console.log("You Guessed Right!");

// let item = "Book";
// let price = 50;

// console.log(`The ${item} costs ${price} dollars.`);

// let fname = prompt("Enter Your Full Name: ").trim();
// console.log(`@${fname.toLowerCase().split(" ").join("")}${fname.length}`);

let fname = prompt("Enter Your Full Name: ").replace(/\s+/g, '').trim();
console.log(`@${fname.toLowerCase()}${fname.length}`);
