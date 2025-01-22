let gameNum = 25;
let userNum = prompt("Guess The Game Number: ");

while (userNum != gameNum) {
  userNum = prompt("You Entered The Wrong Number. Try Again: ");
}
console.log("You Guessed Right!");

let books = {
  book1: {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
  },
  book2: {
    title: "The Great Gatsby",  
    author: "F. Scott Fitzgerald",
    pages: 180,
  }
}