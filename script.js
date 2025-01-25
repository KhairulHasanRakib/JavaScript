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

// let fname = prompt("Enter Your Full Name: ").replace(/\s+/g, '').trim();
// console.log(`@${fname.toLowerCase()}${fname.length}`);

let cities = ["Istanbul", "Izmir", "Ankara", "Bursa", "Antalya"];
// for loop
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
// for of loop
for (let citi of cities) {
    console.log(citi);
}

// find average of student marks [85, 97, 44, 37, 76, 60]
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let mark of marks) {
    sum += mark;
}
console.log(sum / marks.length);

// 10% off for prices item
let items = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let i = 0;
for (let val of items) {
    let off = val / 10;
    console.log(val - off);
    i++;
}