let name = prompt("Enter your name: ");
console.log("Your name: ", name);
let age = prompt("Enter your age: ");
console.log("Your age: ", age);

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a child.");
}

// for
// while
// do while
// for of

for (let i = 0; i <=50; i++) {
  console.log(i);
  if(i%2===0){
    console.log("Even number: ", i);
  }
  if(i%2!==0){
    console.log("Even number: ", i);
  }
}